// src/services/authApi.js
//
// ASSUMED backend contract (nothing built yet on your side — adjust to match
// once the real controller exists):
//
//   POST /api/v1/auth/register   body: { name, email, password }
//                                 -> { token, user: { id, name, email } }
//   POST /api/v1/auth/login      body: { email, password }
//                                 -> { token, user: { id, name, email } }
//   GET  /oauth2/authorization/google
//                                 -> standard Spring Security OAuth2 client
//                                    redirect flow (browser navigation, not fetch)
//
// Token is stored under "hiremind_token" — same key atsApi.js already reads.

const BASE_URL = import.meta.env?.VITE_API_BASE_URL || "https://api.iampushkar.in";
// const BASE_URL = import.meta.env?.VITE_API_BASE_URL || "http://localhost:8080";
const TOKEN_KEY = "hiremind_token";
const USER_KEY = "hiremind_user";

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (res.status === 401) {
    logout();
  }

  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try {
      const body = await res.json();
      message = body.message || body.error || message;
    } catch {
      /* not JSON, keep default message */
    }
    throw new Error(message);
  }

  return res.json();
}

function persistSession({ token, user }) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function login({ email, password }) {
  return request("/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    persistSession(data);
    return data;
  });
}

export function register({ name, email, password }) {
  return request("/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  }).then((data) => {
    persistSession(data);
    return data;
  });
}

/** Kicks off the Spring Security OAuth2 redirect flow — full page navigation, not fetch. */
export function loginWithGoogle() {
  window.location.href = `${BASE_URL}/oauth2/authorization/google`;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser() {
  const raw = localStorage.getItem(USER_KEY);
  return raw ? JSON.parse(raw) : null;
}

function isTokenExpired(token) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (!payload.exp) return false;
    return Date.now() >= payload.exp * 1000;
  } catch {
    return true; // malformed token — treat as expired
  }
}

export function isAuthenticated() {
  const token = getToken();
  if (!token) return false;
  if (isTokenExpired(token)) {
    logout();
    return false;
  }
  return true;
}