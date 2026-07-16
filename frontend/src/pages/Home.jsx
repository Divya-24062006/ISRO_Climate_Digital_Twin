import Hero from "../components/Hero";
import Features from "../components/Features";
import Overview from "../components/Overview";
import Modules from "../components/Modules";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {

    return (

        <div className="bg-slate-50">

            <Hero />

            <Features />

            <Overview />

            <Modules />

            <CTA />

            <Footer />

        </div>

    );

}