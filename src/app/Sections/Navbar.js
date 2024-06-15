"use client";
import {menuNavbar} from "@/app/constants";
import Image from "next/image";
import {instagram, logo, twitter} from "../../../public";
import Link from 'next/link';
import {useState} from "react";

function Navbar(props) {
    const [toggle , setToggle] = useState(false)
    return (
        <div className="">
            <div className=' md:w-full  md:bg-white  flex flex-row items-center opacity-100 justify-between px-4 h-[80px]  '>
                <img className="w-[80px] md:ml-[10%]" src="/logo.png" alt="logo" />
                <div className="hidden md:flex md:mr-[10%] ">
                    {
                        menuNavbar.map((item, index) => (
                          <Link href={"#"+item.section} ><p className="p-2 px-4 mx-2 font-bold rounded-2xl text-accent text-[13px] hover:scale-110 hover:bg-yellow-200 cursor-pointer">
                                {item.nom}
                            </p>
                          </Link>
                        ))
                    }
                    <img className="w-6 h-6 ml-2" src="/twitter.png" alt="twitter logo" />
                    <img className="w-6 h-6 ml-4 " src="/instagram.png" alt="instagram logo" />
                </div>
                <div className=" mg:hidden lg:hidden">
                    {!toggle?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                             onClick={()=>{setToggle(true)}}
                             viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer  ">
                            <path strokeLinecap="round" strokeLinejoin= "round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                             onClick={()=>{setToggle(false)}}
                             viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer float-right">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    }
                    {
                        toggle?
                            <ul className="flex absolute right-1 flex-col mt-8 rounded-md bg-white p-4 ">
                                {
                                    menuNavbar.map((item, index) => (
                                        <Link href={"#"+item.section} ><p className="p-3  hover:bg-secondary rounded-2xl transition ease-in-out hover:scale-110 cursor-pointer">
                                            {item.nom}
                                        </p>
                                        </Link>
                                    ))
                                }
                            </ul>

                            :null
                    }
                </div>
            </div>

        </div>
    );
}

export default Navbar;