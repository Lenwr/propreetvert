
import {menuNavbar} from "@/app/constants";
import Image from "next/image";
import {instagram, logo, twitter} from "@/app/assets";
import Link from 'next/link';

function Navbar(props) {
    const [toggle , setToggle] = ""
    return (
        <div className="">
            <div className=' md:w-full  md:bg-white  md:flex flex-row items-center opacity-100 justify-between px-4 h-[80px] '>
                <Image className="w-[80px] md:ml-[10%]" src={logo} alt="logo" />
                <div className="hidden md:flex md:mr-[10%] ">
                    {
                        menuNavbar.map((item, index) => (
                          <Link href={"#"+item.section} ><p className="p-2 px-4 mx-2 font-bold rounded-2xl text-accent text-[13px] hover:scale-110 hover:bg-yellow-200 cursor-pointer">
                                {item.nom}
                            </p>
                          </Link>
                        ))
                    }
                    <Image className="w-6 h-6 ml-2" src={twitter} alt="twitter logo" />
                    <Image className="w-6 h-6 ml-4 " src={instagram} alt="instagram logo" />
                </div>
            </div>

        </div>
    );
}

export default Navbar;