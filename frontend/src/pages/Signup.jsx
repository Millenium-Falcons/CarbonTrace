// import { useState } from "react";
// import BottomText from "../components/BottomText";
// import Button from "../components/Button";
// import Heading from "../components/Heading";
// import Inputbox from "../components/Inputbox";
// import SubHeading from "../components/SubHeading";

// export default function Signup(){
//     const[username,setusername]=useState("");
//     const[email,setemail]=useState("");
//     const[country,setcountry]=useState("");
//     const[refferal,setrefferal]=useState("");
//     const[password,setpassword]=useState("");
//     const handleClear=()=>{
//       setusername('');
//       setemail('');
//       setpassword('');
//       setrefferal('');
//       setcountry('');
//     }


//     return(
    
//     <div className="bg-zinc-100 h-screen flex justify-center">
//     <div className="w-4/5 my-8 bg-white flex flex-row">
//     <div className="w-80">
//     <img src="https://img.freepik.com/free-vector/stream-binary-code-design-vector_53876-175009.jpg" alt="photo" />
//     </div>
//     <div className="flex flex-col p-5">
//       <SubHeading label="Register"></SubHeading>
//       <p className="text-sky-900">Manage all your inventory efficiently</p>
//       <p className="text-sm">Let's get all set up so you can verify your personal account and begin setting up your work profile</p>
//     <div className="flex flex-row">
//     <Inputbox width="24"label="email"></Inputbox>
//     <Inputbox width="24"label="password"></Inputbox>
//     </div>
//     <div className="flex flex-row">
//     <div>
//     <Inputbox width="20"label="email"></Inputbox>
//     </div>
//     <div>
//     <Inputbox width="20"label="password"></Inputbox>
//     </div>
//     </div>
//     </div>
   
//     </div>
//     </div>
    
//     )

// }
import { useState } from "react";
import BottomText from "../components/BottomText";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputbox from "../components/Inputbox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GiThrownCharcoal } from "react-icons/gi";


export default function Signup(){
    const navigate=useNavigate();
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[cpassword,setcpassword]=useState("");
    const [error, setError] = useState("");
    const handleSend=async ()=>{
      if (!email || !password || !cpassword) {
        setError("All fields are required.");
        return;
    }
    
    setError("");
      try {
        const ob={
          username:email,
          password,
          confirmPassword:cpassword
        };
        
        const response=await axios.post("https://carbon-trace-pied.vercel.app/signup",ob);
        
        if(response.status === 201){
          localStorage.setItem('email', JSON.stringify(email));
          navigate("/home");
        }else if(response.status === 400){
          setError("Incorrect email or password");
        }
      } catch (error) {
        setError("Something bad happened")
        console.error(error);
      }
  
    }
    const handleClear=()=>{     
      setemail('');
      setpassword('');
      setcpassword('');    
    }


    return(
    
      <div className="bg-gray-700 min-h-screen flex justify-center">
      <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-gray-800 border-2 hover:border-[#26de9a] w-80  p-12 h-max px-4">
          <div className="flex justify-between">
            <Heading label="Sign up" color="text-[#26de9a]"></Heading>
          <GiThrownCharcoal size={50} color="#26de9a"></GiThrownCharcoal>
          </div>
          
          <SubHeading label="Email"></SubHeading>
          <Inputbox type="email" label="" placeholder="email" onChange={(e) => setemail(e.target.value)}></Inputbox>
          <SubHeading label="Password"></SubHeading>
          <Inputbox type="password" label="" placeholder="password" onChange={(e) => setpassword(e.target.value)}></Inputbox>
          <SubHeading label="Confirm password"></SubHeading>
          <Inputbox type="password" label="" placeholder="password" onChange={(e) => setcpassword(e.target.value)}></Inputbox>
          {error && <p className="text-red-500">{error}</p>}
          <Button label="Signup" onClick={handleSend}></Button>
          <div className='py-2 text-sm text-white flex justify-center'>
            <div>
              Already have an account?&nbsp; 
            </div>
            <span className="cursor-pointer text-[#26de9a]" onClick={()=>{navigate('/signin')}}>Sign in</span>
        </div>
      </div>
      </div>
      </div>
    
    )

}