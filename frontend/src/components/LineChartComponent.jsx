

// import { Line } from "react-chartjs-2";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// let weight=[0];
// let data = {
//   labels: weight,
//   datasets: [
//     {
//       label: "First dataset",
//       data: weight,
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)"
//     },
//     // {
//     //   label: "Second dataset",
//     //   data: [33, 25, 35, 51, 54, 76],
//     //   fill: false,
//     //   borderColor: "#742774"
//     // }
//   ]
// };


// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import Inputbox from "./Inputbox";
// import Button from "./Button";

// // Register required components
// ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);


// export default function LineChartComponent() {
  


//   const [trainData, setTrainData] = useState(null);
//   const [error, setError] = useState(null);
//   const[train_id,settrainid]=useState(null);
//   const[trainweight,settrainweight]=useState();

//     const fetchTrainData = async () => {
//       try {
//         const response = await axios.get(`https://carbon-trace-pied.vercel.app/get-train-data?train_id=${train_id}`);
//         console.log(response.data);
//         setTrainData(response.data);
//         let modifiedarr= (response.data).map(function(element){
//           return element.train_weight;
//       });
//       console.log(modifiedarr);
//         settrainweight(modifiedarr); 
//         weight=trainweight;
        
//       } catch (err) {
//         setError("Error fetching train data");
//       }
//     };
    


//   if (error) {
//     return <p>{error}</p>;
//   }
//   return (
//     <>
//     <Inputbox type="number" label="train_id" placeholder="train id" onChange={(e) => settrainid(e.target.value)}></Inputbox>
//     <Button label="Get data" onClick={fetchTrainData}></Button>
//     <div>
//       <Line data={data} />
//     </div>
//     </>
//   );
// }

import { Line } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import Inputbox from "./Inputbox";
import Button from "./Button";

// Register required components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

export default function LineChartComponent() {
  const [trainData, setTrainData] = useState([]);
  const [trainweight, setTrainweight] = useState([]);
  const [trainarrival,settrainarrival]=useState([]);
  const [train_id, settrainid] = useState("");
  const [error, setError] = useState(null);

  const fetchTrainData = async () => {
    try {
      const response = await axios.get(`https://carbon-trace-pied.vercel.app/get-train-data?train_id=${train_id}`);
      console.log(response.data);
      setTrainData(response.data);

      // Extract the train weights and update state
      const modifiedarr = response.data.map((element) => element.train_weight);
      const modifiedarr2=response.data.map((element) => element.train_arrival.slice(0,10));
      setTrainweight(modifiedarr);
      settrainarrival(modifiedarr2);
    } catch (err) {
      setError("Error fetching train data");
    }
  };

  const chartData = {
    labels: trainarrival,
    datasets: [
      {
        label: "Train Weights",
        data: trainweight,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
    ],
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="px-3">
      <Inputbox type="number" label="enter train_id" placeholder="train id" onChange={(e) => settrainid(e.target.value)} />
      <Button label="Get data" onClick={fetchTrainData} />
      <div>
        <Line data={chartData} />
      </div>
    </div>
  );
}
