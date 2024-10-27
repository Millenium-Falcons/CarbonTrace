import { NavbarMenu } from "../mockData/data";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { useState } from "react";
import { GiThrownCharcoal } from "react-icons/gi";
import ResponsiveMenu from "./ResponsiveMenu";
import { useNavigate } from "react-router-dom";
const Navbar=()=>{
    const [open,setOpen]=useState(false)
    const navigate=useNavigate()
    return (
    <>
    <nav>
        <div className="flex justify-between items-center py-8 sm:p-2 lg:p-4 xl:p-5 bg-slate-600">
            
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <GiThrownCharcoal></GiThrownCharcoal>
                <p>Coal</p>
                <p className="text-secondary text-[#26de9a]">Trace</p>
            </div>
            <div className="hidden md:block">
                <ul className="flex items-center gap-6 text-[#26de9a]">
                    {NavbarMenu.map((item)=>{
                        return(
                            <li key={item.id}>
                                <a className="inline-block py-1 px-3 hover:text-white font-semibold " href={item.link}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
            <div className="flex items-center gap-4">
           
                <button onClick={()=>{localStorage.removeItem("email"); navigate("/signin");}} className="hover:bg-[#26de9a]  text-[#26de9a] font-semibold hover:text-white rounded-md border-2 border-[#26de9a] px-6 py-2 duration-200 hidden md:block">Logout</button>
            </div>
        
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                <MdMenu className="text-4xl"></MdMenu>
            </div>
        </div>
    </nav>
    <ResponsiveMenu open={open}></ResponsiveMenu>
    </>
    )
}
export default Navbar;