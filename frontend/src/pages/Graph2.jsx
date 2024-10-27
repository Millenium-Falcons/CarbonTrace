import Heading from "../components/Heading"
import LineChartComponent from "../components/LineChartComponent"
import LineChartComponent2 from "../components/LineChartComponent2"
import Navbar from "../components/Navbar"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Graph2=()=>{
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
    <div>
        <Navbar />
    </div>
    <div className="bg-gray-800 min-h-screen flex justify-center">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 py-3 border-2 border-[#26de9a] my-3 pt-0 rounded-xl">
            <div className="p-2 bg-[#26de9a] rounded-lg rounded-b-none border-2 border-[#26de9a]">
                <Heading label="Anamoly Data" color="text-white" />
            </div>
            <LineChartComponent2 />
        </div>
    </div>
</>

    )
}
export default Graph2