import Navbar from "@/app/Sections/Navbar";
import Banner from "@/app/Sections/banner";
import Goal from "@/app/Sections/goal";
import WhyUs from "@/app/Sections/whyUs";
import Owner from "@/app/Sections/owner";
import NosServices from "@/app/Sections/nosServices";
import './globals.css'
import Footer from "@/app/Sections/Footer";
import Divider from "@/app/components/divider";
import AboutUs from "@/app/Sections/aboutUs";
import Valeurs from "@/app/Sections/valeurs";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export default function Home() {
    return (
        <main>
            <AppRouterCacheProvider>
            <div className="app bg-green-50">
                <div className="">
                    <Navbar/>
                </div>
                <Banner/>
                <div className="about">
                    <AboutUs/>
                </div>
                <div>
                    <Valeurs/>
                </div>
                <NosServices/>
                <WhyUs/>
                <Divider/>
                <Footer/>
            </div>
            </AppRouterCacheProvider>
        </main>
    );
}
