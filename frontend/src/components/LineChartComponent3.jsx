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

export default function LineChartComponent3() {
  const [trainData, setTrainData] = useState([]);
  const [trainweight, setTrainweight] = useState([]);
  const [trainarrival,settrainarrival]=useState([]);
  const [train_id, settrainid] = useState("");
  const [timestamp,settimestamp]=useState("");
  const [error, setError] = useState("");

  const fetchTrainData = async () => {
    try {
      const response = await axios.get(`https://carbon-trace-pied.vercel.app/get-moisture?train_id=${train_id}&timestamp=${timestamp}`);
      console.log(response.data);
      setTrainData(response.data);

      // Extract the train weights and update state
      const modifiedarr = response.data.map((element) => element.moisture_level);
      const modifiedarr2=response.data.map((element) => element.timestamp.slice(12,19));
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
        label: "Coal Moisture stats",
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
      <Inputbox type="date" label="enter date" placeholder="timestamp" onChange={(e) => settimestamp(e.target.value)} />
      <Button label="Get data" onClick={fetchTrainData} />
      <div>
        <Line data={chartData} />
      </div>
    </div>
  );
}
