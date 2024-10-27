import Navbar from "../components/Navbar"
import TrainTable from "../components/Traintable"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Traindetails=()=>{
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
        <div><Navbar></Navbar></div>
        <div className="bg-gray-800 min-h-screen flex justify-center text-[#26de9a]">
            
        <div>
            <TrainTable></TrainTable>
        </div>
        </div>
        </>
    )
}
export default Traindetails