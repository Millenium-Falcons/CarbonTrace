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

export default function LineChartComponent2() {
  const [trainData, setTrainData] = useState([]);
  const [trainweight, setTrainweight] = useState([]);
  const [trainarrival,settrainarrival]=useState([]);
  const [train_id, settrainid] = useState("");
  const [error, setError] = useState(null);

  const fetchTrainData = async () => {
    try {
      const response = await axios.get(`https://carbon-trace-pied.vercel.app/get-Anamoly-count?train_id=${train_id}`);
      console.log(response.data);
      setTrainData(response.data);

      // Extract the train weights and update state
      const modifiedarr = response.data.map((element) => element.count);
      const modifiedarr2=response.data.map((element) => element.date.slice(0,10));
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
        label: "Anomaly Count",
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
