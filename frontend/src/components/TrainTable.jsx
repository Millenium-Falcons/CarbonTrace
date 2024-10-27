// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Button from "./Button";

// const TrainTable = () => {
//   const [trains, setTrains] = useState([]);

//   const track=async (train_id,username)=>{
//     try {
//       username=username.strip("");
//       console.log({train_id,username})
//       const response=await axios.post("https://carbon-trace-pied.vercel.app/user-tracking",{
//         train_id,
//         username
//       });
      
//       console.log(response);
      
//     } catch (error) {
//       console.log(error);
      
//     }

//   }
//   useEffect(() => {
//     const fetchTrains = async () => {
//       try {
//         const response = await axios.get("https://carbon-trace-pied.vercel.app/get-train"); // Update with your actual backend URL
//         setTrains(response.data);
//       } catch (error) {
//         console.error("Error fetching train data:", error);
//       }
//     };

//     fetchTrains();
//   }, []);

//   return (
//     <div>
//       <h2 className="font-bold text-xl py-4 text-[#26de9a]">Train Availability</h2>
//       <table className="border-2 border-[#26de9a]">
//         <thead>
//           <tr>
//             <th className="border-2 border-[#26de9a] p-3">Train ID</th>
//             <th className="border-2 border-[#26de9a] p-3">Train Name</th>
//             <th className="border-2 border-[#26de9a] p-3">Departure</th>
//             <th className="border-2 border-[#26de9a] p-3">Arrival</th>
//             <th className="border-2 border-[#26de9a] p-3">Tracking Status</th>

//           </tr>
//         </thead>
//         <tbody className="border-2 border-[#26de9a]">
//           {trains.map((train) => (
//             <tr key={train.train_id}>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.train_id}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.train_name}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.departure}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.arrival}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-900"><Button label="Track" onClick={()=>{track(train.train_id,localStorage.getItem("email"))}}></Button><Button label="Track" onClick={()=>{track(train.train_id,localStorage.getItem("email"))}}></Button></td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TrainTable;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Button from "./Button";

// const TrainTable = () => {
//   const [trains, setTrains] = useState([]);
//   const [trackingStatus, setTrackingStatus] = useState({});

//   const track = async (train_id, username) => {
//     try {
//       username = username.replace(/^"(.*)"$/, "$1"); // Strip any surrounding quotes
//       console.log({ train_id, username });
      
//       // Toggle the tracking status in the UI
//       setTrackingStatus((prevStatus) => ({
//         ...prevStatus,
//         [train_id]: !prevStatus[train_id],
//       }));
      
//       const response = await axios.post("https://carbon-trace-pied.vercel.app/user-tracking", {
//         train_id,
//         username,
//       });
      
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const fetchTrains = async () => {
//       try {
//         const response = await axios.get("https://carbon-trace-pied.vercel.app/get-train");
//         setTrains(response.data);
//       } catch (error) {
//         console.error("Error fetching train data:", error);
//       }
//     };

//     fetchTrains();
//   }, []);

//   return (
//     <div>
//       <h2 className="font-bold text-xl py-4 text-[#26de9a]">Train Availability</h2>
//       <table className="border-2 border-[#26de9a]">
//         <thead>
//           <tr>
//             <th className="border-2 border-[#26de9a] p-3">Train ID</th>
//             <th className="border-2 border-[#26de9a] p-3">Train Name</th>
//             <th className="border-2 border-[#26de9a] p-3">Departure</th>
//             <th className="border-2 border-[#26de9a] p-3">Arrival</th>
//             <th className="border-2 border-[#26de9a] p-3">Tracking Status</th>
//           </tr>
//         </thead>
//         <tbody className="border-2 border-[#26de9a]">
//           {trains.map((train) => (
//             <tr key={train.train_id}>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.train_id}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.train_name}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.departure}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.arrival}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-900">
//                 <Button 
//                   label={trackingStatus[train.train_id] ? "Untrack" : "Track"} 
//                   onClick={() => track(train.train_id, localStorage.getItem("email"))} 
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TrainTable;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Button from "./Button";

// const TrainTable = () => {
//   const [trains, setTrains] = useState([]);
//   const [trackingStatus, setTrackingStatus] = useState({});

//   const track = async (train_id, username) => {
//     try {
//       username = username.replace(/^"(.*)"$/, "$1"); // Strip any surrounding quotes
//       console.log({ train_id, username });

//       const response = await axios.post("https://carbon-trace-pied.vercel.app/user-tracking", {
//         train_id,
//         username,
//       });

//       // If tracking is successful, update the UI
//       if (response.status === 200) {
//         setTrackingStatus((prevStatus) => ({
//           ...prevStatus,
//           [train_id]: true,
//         }));
//       }

//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const untrack = async (train_id, username) => {
//     try {
//       username = username.replace(/^"(.*)"$/, "$1"); // Strip any surrounding quotes
//       console.log({ train_id, username });

//       const response = await axios.delete("https://carbon-trace-pied.vercel.app/user-untracking", {
//         data: {
//           train_id,
//           username,
//         },
//       });

//       // If untracking is successful, update the UI
//       if (response.status === 200) {
//         setTrackingStatus((prevStatus) => ({
//           ...prevStatus,
//           [train_id]: false,
//         }));
//       }

//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const fetchTrains = async () => {
//       try {
//         const response = await axios.get("https://carbon-trace-pied.vercel.app/get-train");
//         setTrains(response.data);
//       } catch (error) {
//         console.error("Error fetching train data:", error);
//       }
//     };

//     fetchTrains();
//   }, []);

//   return (
//     <div>
//       <h2 className="font-bold text-xl py-4 text-[#26de9a]">Train Availability</h2>
//       <table className="border-2 border-[#26de9a]">
//         <thead>
//           <tr>
//             <th className="border-2 border-[#26de9a] p-3">Train ID</th>
//             <th className="border-2 border-[#26de9a] p-3">Train Name</th>
//             <th className="border-2 border-[#26de9a] p-3">Departure</th>
//             <th className="border-2 border-[#26de9a] p-3">Arrival</th>
//             <th className="border-2 border-[#26de9a] p-3">Tracking Status</th>
//           </tr>
//         </thead>
//         <tbody className="border-2 border-[#26de9a]">
//           {trains.map((train) => (
//             <tr key={train.train_id}>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.train_id}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.train_name}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.departure}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.arrival}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-900">
//                 <Button 
//                   label={trackingStatus[train.train_id] ? "Untrack" : "Track"} 
//                   onClick={() => {
//                     const username = localStorage.getItem("email");
//                     trackingStatus[train.train_id]
//                       ? untrack(train.train_id, username)
//                       : track(train.train_id, username);
//                   }} 
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TrainTable;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Button from "./Button";

// const TrainTable = () => {
//   const [trains, setTrains] = useState([]);
//   const [trackingStatus, setTrackingStatus] = useState({});

//   const fetchTrackingStatus = async (username) => {
//     try {
//       // Fetch the tracking status for each train
//       const response = await axios.get("https://carbon-trace-pied.vercel.app/user-tracking", {
//         params: { username },
//       });

//       // Update the tracking status state based on the response
//       const trackingEntries = response.data;
//       const status = trains.reduce((acc, train) => {
//         acc[train.train_id] = trackingEntries.some(entry => entry.train_id === train.train_id);
//         return acc;
//       }, {});
//       setTrackingStatus(status);
//     } catch (error) {
//       console.error("Error fetching tracking status:", error);
//     }
//   };

//   const track = async (train_id, username) => {
//     try {
//       username = username.replace(/^"(.*)"$/, "$1"); // Strip any surrounding quotes
//       const response = await axios.post("https://carbon-trace-pied.vercel.app/user-tracking", {
//         train_id,
//         username,
//       });

//       if (response.status === 200) {
//         setTrackingStatus((prevStatus) => ({
//           ...prevStatus,
//           [train_id]: true,
//         }));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const untrack = async (train_id, username) => {
//     try {
//       username = username.replace(/^"(.*)"$/, "$1");
//       const response = await axios.delete("https://carbon-trace-pied.vercel.app/user-untracking", {
//         data: { train_id, username },
//       });

//       if (response.status === 200) {
//         setTrackingStatus((prevStatus) => ({
//           ...prevStatus,
//           [train_id]: false,
//         }));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const fetchTrains = async () => {
//       try {
//         const response = await axios.get("https://carbon-trace-pied.vercel.app/get-train");
//         setTrains(response.data);

//         // After fetching trains, fetch the tracking status for each train
//         const username = localStorage.getItem("email");
//         if (username) fetchTrackingStatus(username);
//       } catch (error) {
//         console.error("Error fetching train data:", error);
//       }
//     };

//     fetchTrains();
//   }, []);

//   return (
//     <div>
//       <h2 className="font-bold text-xl py-4 text-[#26de9a]">Train Availability</h2>
//       <table className="border-2 border-[#26de9a]">
//         <thead>
//           <tr>
//             <th className="border-2 border-[#26de9a] p-3">Train ID</th>
//             <th className="border-2 border-[#26de9a] p-3">Train Name</th>
//             <th className="border-2 border-[#26de9a] p-3">Departure</th>
//             <th className="border-2 border-[#26de9a] p-3">Arrival</th>
//             <th className="border-2 border-[#26de9a] p-3">Tracking Status</th>
//           </tr>
//         </thead>
//         <tbody className="border-2 border-[#26de9a]">
//           {trains.map((train) => (
//             <tr key={train.train_id}>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.train_id}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.train_name}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.departure}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.arrival}</td>
//               <td className="p-4 border-2 border-[#26de9a] bg-gray-900">
//                 <Button
//                   label={trackingStatus[train.train_id] ? "Untrack" : "Track"}
//                   onClick={() => {
//                     const username = localStorage.getItem("email");
//                     trackingStatus[train.train_id]
//                       ? untrack(train.train_id, username)
//                       : track(train.train_id, username);
//                   }}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TrainTable;






import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";

const TrainTable = () => {
  const [trains, setTrains] = useState([]);
  const [trackingStatus, setTrackingStatus] = useState({});

  const fetchTrackingStatusForTrain = async (train_id, username) => {
    try {
      const response = await axios.get("https://carbon-trace-pied.vercel.app/tracking-status", {
        params: { username },
      });

      // Update tracking status based on the response
      setTrackingStatus((prevStatus) => ({
        ...prevStatus,
        [train_id]: response.data.isTracking,
      }));
    } catch (error) {
      console.error(`Error fetching tracking status for train ${train_id}:`, error);
    }
  };

  const track = async (train_id, username) => {
    try {
      username = username.replace(/^"(.*)"$/, "$1");
      const response = await axios.post("https://carbon-trace-pied.vercel.app/user-tracking", {
        train_id,
        username,
      });

      if (response.status === 200) {
        setTrackingStatus((prevStatus) => ({
          ...prevStatus,
          [train_id]: true,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const untrack = async (train_id, username) => {
    try {
      username = username.replace(/^"(.*)"$/, "$1");
      const response = await axios.delete("https://carbon-trace-pied.vercel.app/user-untracking", {
        data: { train_id, username },
      });

      if (response.status === 200) {
        setTrackingStatus((prevStatus) => ({
          ...prevStatus,
          [train_id]: false,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get("https://carbon-trace-pied.vercel.app/get-train");
        setTrains(response.data);

        const username = localStorage.getItem("email");
        if (username) {
          response.data.forEach((train) => {
            fetchTrackingStatusForTrain(train.train_id, username);
          });
        }
      } catch (error) {
        console.error("Error fetching train data:", error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-xl py-4 text-[#26de9a]">Train Availability</h2>
      <table className="border-2 border-[#26de9a]">
        <thead>
          <tr>
            <th className="border-2 border-[#26de9a] p-3">Train ID</th>
            <th className="border-2 border-[#26de9a] p-3">Train Name</th>
            <th className="border-2 border-[#26de9a] p-3">Departure</th>
            <th className="border-2 border-[#26de9a] p-3">Arrival</th>
            <th className="border-2 border-[#26de9a] p-3">Tracking Status</th>
          </tr>
        </thead>
        <tbody className="border-2 border-[#26de9a]">
          {trains.map((train) => (
            <tr key={train.train_id}>
              <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.train_id}</td>
              <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.train_name}</td>
              <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.departure}</td>
              <td className="p-4 border-2 border-[#26de9a] bg-gray-700">{train.arrival}</td>
              <td className="p-4 border-2 border-[#26de9a] bg-gray-900">
                <Button
                  label={trackingStatus[train.train_id] ? "Untrack" : "Track"}
                  onClick={() => {
                    const username = localStorage.getItem("email");
                    trackingStatus[train.train_id]
                      ? untrack(train.train_id, username)
                      : track(train.train_id, username);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainTable;
