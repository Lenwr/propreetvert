import Navbar from "@/app/Sections/Navbar";
import Banner from "@/app/Sections/banner";
import WhyUs from "@/app/Sections/whyUs";
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
                <div>
                    <NosServices/>
                </div>
                <WhyUs/>
                <Divider/>
                <Footer/>
            </div>
            </AppRouterCacheProvider>
        </main>
    );
}
