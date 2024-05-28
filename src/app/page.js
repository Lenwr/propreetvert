import Navbar from "@/app/Sections/Navbar";
import Banner from "@/app/Sections/banner";
import Goal from "@/app/Sections/goal";
import WhyUs from "@/app/Sections/whyUs";
import Owner from "@/app/Sections/owner";
import NosServices from "@/app/Sections/nosServices";
import './globals.css'
import Footer from "@/app/Sections/Footer";
import Divider from "@/app/components/divider";

export default function Home() {
    return (
        <main>
            <div className="app">
                <Navbar/>
                <Banner/>
                <Owner/>
                <NosServices/>
                <WhyUs/>
                <Divider/>
                <Footer/>
            </div>
        </main>
    );
}
