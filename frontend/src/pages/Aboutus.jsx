import Heading from "../components/Heading"
import Navbar from "../components/Navbar"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Aboutus=()=>{
    const [lastNotifiedAnomaly, setLastNotifiedAnomaly] = useState(null);
  const [lastNotifiedDate, setLastNotifiedDate] = useState(null);

  // Function to check for anomalies and send toast notifications
  const fetchAnomalyData = async () => {
    try {
      const response = await axios.get("https://carbon-trace-pied.vercel.app/anomaly-detected-notify");
      const { anomaly_details, train_id, date } = response.data;

      // If a new anomaly is detected or the date has changed
      if (
        anomaly_details &&
        (anomaly_details !== lastNotifiedAnomaly || date !== lastNotifiedDate)
      ) {
        setLastNotifiedAnomaly(anomaly_details);
        setLastNotifiedDate(date);

        // Display the toast notification
        toast(`⚠️ Anomaly detected on Train ${train_id}: ${anomaly_details}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error fetching anomaly details:", error);
    }
  };

  // Set up polling when component mounts
  React.useMemo(() => {
    const interval = setInterval(fetchAnomalyData, 5000); // Poll every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs only on mount

    return(
        <>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
        <Navbar></Navbar>
        <div className="bg-gray-800 border-2 border-[#00d88a] min-h-screen flex flex-col justify-center items-center p-3 text-[#26de9a]">
    <div className="mb-4"><Heading label="About us" className="text-4xl font-bold mb-6 text-center mb-4" /></div>
    
    <p className="text-lg  leading-relaxed text-center mb-4">
        Welcome to <span className="text-[#00d88a] font-semibold">Coal Trace</span>, your trusted partner in coal transportation tracking. In a world where efficiency and security are crucial, Coal Trace steps up as a powerful digital platform designed to keep coal transport safe, efficient, and transparent. We empower stakeholders in the coal transportation industry by providing real-time data, alerts, and detailed insights into coal train operations across the nation.
    </p>
    
    <p className="text-lg  leading-relaxed text-center mb-4">
        Our mission is simple yet impactful: to bring transparency and security to the coal transport process. At Coal Trace, we harness the latest technology to ensure our users can monitor coal shipments from dispatch to destination, keeping an eye on every train’s route, speed, and estimated arrival times. Our platform also proactively alerts you to any suspicious activities, helping to prevent and address issues like coal theft.
    </p>
    
    <p className="text-lg  leading-relaxed text-center">
        We understand the challenges and complexities involved in the coal supply chain. That's why our system is designed to be user-friendly, responsive, and detailed, offering you the peace of mind that comes with knowing your cargo is monitored at every step.
    </p>
</div>
</>
    )

}
export default Aboutus