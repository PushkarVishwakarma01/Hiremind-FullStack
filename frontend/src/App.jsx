import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OAuthRedirect from "./pages/OAuthRedirect";
import Dashboard from "./pages/Dashboard";
import FindJobs from "./pages/FindJobs";
import AppliedJobs from "./pages/AppliedJobs";
import Opportunities from "./pages/Opportunities";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Resources from "./pages/Resources";
import ATSAnalyzer from "./pages/ATSAnalyzer";

export default function App() {
    return (
        <Routes>
            {/* Public — no auth required */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/oauth2/redirect" element={<OAuthRedirect />} />

            {/* Sidebar shell */}
            <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/dashboard" />} />

                {/* Dashboard stays public per your call — everything else needs a token */}
                <Route path="/dashboard" element={<Dashboard />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/findjobs" element={<FindJobs />} />
                    <Route path="/appliedjobs" element={<AppliedJobs />} />
                    <Route path="/opportunities" element={<Opportunities />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/ats" element={<ATSAnalyzer />} />
                </Route>
            </Route>
        </Routes>
    );
}