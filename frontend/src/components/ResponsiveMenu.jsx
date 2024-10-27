import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ResponsiveMenu= ({open}) => {
    const navigate=useNavigate();
    return(
        <AnimatePresence>
            {
                open &&(
                    <motion.div
                    initial={{opacity:0,y: -100}}
                    animate={{opacity:1,y: 0}}
                    exit={{opacity:0,y: -100}}
                    transition={{duration:0.3}}
                    className="absolute top-20 left-0 w-full h-screen z-20"
                    >
                        <div className="text-xl font-semibold uppercase bg-[#26de9a] text-white py-10 m-6 rounded-3xl">
                            <ul className="flex flex-col justify-center items-center gap-10">
                                <li className="cursor-pointer" onClick={()=>{navigate("/home")}}>Home</li>
                                <li className="cursor-pointer" onClick={()=>{navigate("/train")}}>Train details</li>
                                <li className="cursor-pointer" onClick={()=>{navigate("/aboutus")}}>About us</li>
                                <li className="cursor-pointer" onClick={()=>{localStorage.removeItem("email");navigate("/signin");}}>Logout</li>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
};
export default ResponsiveMenu;