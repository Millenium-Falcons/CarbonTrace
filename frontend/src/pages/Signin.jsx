import { useState } from "react";
import BottomText from "../components/BottomText";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputbox from "../components/Inputbox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin(){
    const navigate=useNavigate();
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const [error, setError] = useState("");
    const handleSend=async ()=>{
      if (!email || !password) {
        setError("All fields are required.");
        return;
    }
    
    setError("");
      try {
        const ob={
          username:email,
          password
        };
        console.log(ob);
        const response=await axios.post("https://carbon-trace-pied.vercel.app/login",ob);
        
        if(response.status === 200){
          localStorage.setItem('email', JSON.stringify(email));
          navigate("/home");
        }else if(response.status === 402){
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
    }


    return(
    
      <div className="bg-gray-600 min-h-screen flex justify-center">
      <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-gray-800 border-2 hover:border-[#26de9a] w-80  p-12 h-max px-4">
          <Heading label="Sign in" color="text-[#26de9a]"></Heading>
          <SubHeading label="Email"></SubHeading>
          <Inputbox type="email" label="" placeholder="email" onChange={(e) => setemail(e.target.value)}></Inputbox>
          <SubHeading label="Password"></SubHeading>
          <Inputbox type="password" label="" placeholder="password" onChange={(e) => setpassword(e.target.value)}></Inputbox>
          {error && <p className="text-red-500">{error}</p>}
          <Button label="Signin" onClick={handleSend}></Button>
          <div className='py-2 text-sm text-white flex justify-center'>
            <div>
              Don't have an account?&nbsp;
            </div>
            <span className="cursor-pointer text-[#26de9a]" onClick={()=>{navigate('/')}}>Sign up</span>
        </div>
      </div>
      </div>
      </div>
    
    )

}