// src/services/atsApi.js
//
// Talks to the two backend controllers:
//   POST /api/v1/resume/upload-ai   -> ResumeUploadResponse { resumeId, candidateProfileId, fileName, message }
//   POST /api/v1/ats/analyze        -> ATSAnalysisResponse   { scores, matchedSkills, missingSkills, ... }
//   GET  /api/v1/ats/history        -> ATSHistoryResponse[]
//   GET  /api/v1/ats/history/{id}   -> ATSAnalysisResponse
//
// ATSRequest DTO: { resumeId, jobDescription } — candidateProfileId is
// resolved server-side from the resume, so it's not sent here.

const BASE_URL = import.meta.env?.VITE_API_BASE_URL || "https://api.iampushkar.in";
// const BASE_URL = import.meta.env?.VITE_API_BASE_URL || "http://localhost:8080";

async function request(path, options = {}) {
  const token = localStorage.getItem("hiremind_token");

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try {
      const body = await res.json();
      message = body.message || body.error || message;
    } catch {
      /* response wasn't JSON, keep default message */
    }
    throw new Error(message);
  }

  if (res.status === 204) return null;
  return res.json();
}

/** Upload + AI-parse a resume file. Returns { resumeId, candidateProfileId, fileName, message } */
export function uploadResumeAI(file) {
  const formData = new FormData();
  formData.append("file", file);

  return request("/api/v1/resume/upload-ai", {
    method: "POST",
    body: formData,
  });
}

/** Run ATS analysis for an already-uploaded resume against a job description. */
export function analyzeResume({ resumeId, jobDescription }) {
  return request("/api/v1/ats/analyze", {
    method: "POST",
    body: JSON.stringify({ resumeId, jobDescription }),
  });
}

/** Fetch past analyses for a candidate profile. */
export function getATSHistory(candidateProfileId) {
  return request(
    `/api/v1/ats/history?candidateProfileId=${encodeURIComponent(candidateProfileId)}`
  );
}

/** Fetch one full past analysis by id. */
export function getATSHistoryById(id) {
  return request(`/api/v1/ats/history/${id}`);
}