
// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "../components/Navbar";
// import Card2 from "../components/Card2";
// import Card from "../components/Card";
// const details1="The Train Weight Analysis page offers a graph to track coal weight in each train, helping users quickly spot weight inconsistencies and ensure secure transport from start to finish."
// const details2="";
// const Test2 = () => {
//   const [lastNotifiedAnomaly, setLastNotifiedAnomaly] = useState(null);
//   const [lastNotifiedDate, setLastNotifiedDate] = useState(null);

//   // Function to check for anomalies and send toast notifications
//   const fetchAnomalyData = async () => {
//     try {
//       const response = await axios.get("https://carbon-trace-pied.vercel.app/anomaly-detected-notify");
//       const { anomaly_details, train_id, date } = response.data;

//       // If a new anomaly is detected or the date has changed
//       if (
//         anomaly_details &&
//         (anomaly_details !== lastNotifiedAnomaly || date !== lastNotifiedDate)
//       ) {
//         setLastNotifiedAnomaly(anomaly_details);
//         setLastNotifiedDate(date);

//         // Display the toast notification
//         toast(`🦄 Anomaly detected on Train ${train_id}: ${anomaly_details}`, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           transition: Bounce,
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching anomaly details:", error);
//     }
//   };

//   // Set up polling when component mounts
//   React.useMemo(() => {
//     const interval = setInterval(fetchAnomalyData, 5000); // Poll every 5 seconds

//     // Clean up interval on component unmount
//     return () => clearInterval(interval);
//   }, []); // Empty dependency array means this runs only on mount

//   return (
//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//         transition={Bounce}
//       />
//       <div className="bg-gray-800 min-h-screen">
//         <Navbar />
//         <div className="flex flex-wrap justify-center gap-4 p-4 my-8">
//           <Card2 heading="Train Weight Analysis" link="/graph" details={details1} />
//           <Card2 heading="Anomaly Data" link="/graph2" />
//           <Card2 heading="Coal Moisture Data" link="/graph3" />
        
          
//         </div>
//       </div>
//     </>
//   );
// };

// export default Test2;


import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Card2 from "../components/Card2";
import Card from "../components/Card";
import Footer from "../components/Footer";
const details1="The Train Weight Analysis page offers a graph to track coal weight in each train, helping users quickly spot weight inconsistencies and ensure secure transport from start to finish."
const details2="The Anomaly Data page displays a daily graph of detected anomalies, helping users monitor unusual activities and ensure secure coal transport.";
const details3="The Coal Moisture Data page provides a graph tracking moisture fluctuations in coal bogies, helping detect signs of possible coal theft during transit."
const Test2 = () => {
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

  return (
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
      <div className="bg-gray-800 min-h-screen">
        <Navbar />
        <div className="flex flex-col justify-center items-center gap-4 p-4 my-8">
          <div className="flex flex-wrap gap-4">
          <Card details={details1}></Card>
            <Card2 heading="Train Weight Analysis" link="/graph" />          
          </div>
          <div className="flex flex-wrap gap-4">
          <Card details={details2}></Card>
          <Card2 heading="Anomaly Data" link="/graph2" />
          </div>
          <div className="flex flex-wrap gap-4">
          <Card details={details3}></Card>
            <Card2 heading="Coal Moisture Data" link="/graph3" />
          </div>
          
        
          
        </div>
        <Footer></Footer>
      </div>

    </>
  );
};

export default Test2;
