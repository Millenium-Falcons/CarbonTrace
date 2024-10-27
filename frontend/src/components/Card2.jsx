import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Card2=({heading,link,details})=>{
    const navigate=useNavigate();
    
  
    return(
        
        <div
  className="div h-[14em] w-[18em] bg-gray-700  rounded-[1em] overflow-hidden relative group p-2 z-0"
>
  <div
    className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#26de9a] group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
  onClick={()=>{navigate(link)}}
    className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#26de9a] group-hover:text-[white] duration-500"
  >
    {/* <span
      className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0"
      ><FaArrowRight></FaArrowRight></span
    > */}
    <FaArrowRight className="h-5 w-4"></FaArrowRight>
    <i className="fa-solid fa-arrow-right"></i>
  </button>

  <h1
    className="z-20 text-[#26de9a] font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]"
  >
    {heading}
  </h1>
  <span className="text-transparent hover:text-white transition-colors duration-400">{details}</span>
</div>
    )
}
export default Card2;