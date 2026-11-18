import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyHireMind from "../components/WhyHireMind";
import Journey from "../components/Journey";
import JobsGrid from "../components/JobsGrid";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

export default function Dashboard() {

    const [collapsed, setCollapsed] = useState(false);

    return (

        <div className="flex h-screen">

            <div className="flex-1 overflow-y-auto">

                <TopBar />

                <Hero />

                <Stats />

                <WhyHireMind />

                <Journey />

                <JobsGrid />

                <Testimonial />

                <Footer />

            </div>

        </div>

    );

}