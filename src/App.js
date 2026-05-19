
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [waterLevel, setWaterLevel] = useState(0);
  const [distance, setDistance] = useState(0);
  const [wifi, setWifi] = useState(0);
  const [tankStatus, setTankStatus] = useState("LOADING");
  const [chartData, setChartData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");
  const [alertMessage, setAlertMessage] = useState("Monitoring water levels normally");

  const CHANNEL_ID = "3371439";
  const READ_API_KEY = "WLKPSEKY9SO4DFMG";

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.thingspeak.com/channels/${CHANNEL_ID}/feeds.json?api_key=${READ_API_KEY}&results=10`
      );

      const data = await response.json();

      const feeds = data.feeds;

      if (feeds.length > 0) {
        const latest = feeds[feeds.length - 1];

        const level = parseFloat(latest.field2);
        const dist = parseFloat(latest.field1);
        const wifiSignal = parseFloat(latest.field3);
        const status = parseInt(latest.field4);

        setWaterLevel(level);
        setDistance(dist);
        setWifi(wifiSignal);

        setLastUpdated(
          new Date(latest.created_at).toLocaleTimeString()
        );

        if (status === 1) {
          setTankStatus("LOW");
          setAlertMessage("⚠️ Low water level detected");
        } else if (status === 2) {
          setTankStatus("MEDIUM");
          setAlertMessage("🟡 Water level stable");
        } else if (status === 3) {
          setTankStatus("FULL");
          setAlertMessage("✅ Tank filled successfully");
        }

        const formattedData = feeds.map((feed) => ({
          time: new Date(feed.created_at).toLocaleTimeString(),
          level: parseFloat(feed.field2),
        }));

        setChartData(formattedData);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const getStatusColor = () => {
    if (tankStatus === "LOW") return "#ff4d4d";
    if (tankStatus === "MEDIUM") return "#ffaa00";
    return "#00cc66";
  };

  const getStatusBackground = () => {
    if (tankStatus === "LOW") return "#ffe5e5";
    if (tankStatus === "MEDIUM") return "#fff3d9";
    return "#e5fff1";
  };

  const getWifiText = () => {
    if (wifi > -60) return "Excellent";
    if (wifi > -75) return "Good";
    return "Weak";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef2f7",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div>
          <h1
            style={{
              color: "#16375b",
              marginBottom: "5px",
            }}
          >
            Smart Water Level Monitoring Dashboard
          </h1>

          <p style={{ color: "#666" }}>
            IoT-based real-time smart water monitoring and analytics system
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "15px 20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ color: "green", margin: 0 }}>
            🟢 System Online
          </h3>

          <p style={{ marginTop: "5px", color: "#666" }}>
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px",
          marginBottom: "25px",
        }}
      >
        <Card
          title="Water Level"
          value={`${waterLevel.toFixed(1)} %`}
          color="#0077ff"
          bg="#eaf3ff"
        />

        <Card
          title="Distance"
          value={`${distance.toFixed(1)} cm`}
          color="#8e44ad"
          bg="#f3eaff"
        />

        <Card
          title="Connection Status"
          value={getWifiText()}
          small={`(${wifi} dBm)`}
          color="#009688"
          bg="#e6fffb"
        />

        <Card
          title="Tank Status"
          value={tankStatus}
          color={getStatusColor()}
          bg={getStatusBackground()}
        />
      </div>

    <div
  style={{
    background: "white",
    borderRadius: "15px",
    padding: "20px",
    marginBottom: "25px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  }}
>
  <h2 style={{ color: "#16375b" }}>
    Project Objective
  </h2>

  <p
    style={{
      color: "#555",
      fontSize: "17px",
      lineHeight: "1.7",
      marginTop: "10px",
    }}
  >
    This system continuously monitors water storage levels
    using ultrasonic sensing and cloud analytics to detect
    low-water conditions, monitor usage trends, and improve
    smart water infrastructure management using a low-cost
    IoT solution.
  </p>
</div>

<div
  style={{
    background: "white",
    borderRadius: "15px",
    padding: "20px",
    marginBottom: "25px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  }}
>
  <h2 style={{ color: "#16375b" }}>⚠️ Smart Alerts</h2>

  <p
    style={{
      fontSize: "18px",
      color: "#444",
      marginTop: "10px",
    }}
  >
    {alertMessage}
  </p>
</div>  

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#16375b", marginBottom: "20px" }}>
            Tank Visualization
          </h2>

          <div
            style={{
              width: "150px",
              height: "300px",
              border: "6px solid #16375b",
              borderRadius: "20px",
              margin: "40px auto",
              overflow: "hidden",
              position: "relative",
              background: "#f2f2f2",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: `${waterLevel}%`,
                background:
                  waterLevel > 70
                    ? "#00cc66"
                    : waterLevel > 30
                    ? "#ffaa00"
                    : "#ff4d4d",
                transition: "0.5s",
              }}
            ></div>
          </div>

          <h1
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#16375b",
            }}
          >
            {waterLevel.toFixed(1)}%
          </h1>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#16375b", marginBottom: "20px" }}>
            Water Usage Pattern Over Time
          </h2>

          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="time" />

              <YAxis domain={[0, 100]} />

              <Tooltip />

              <Line
                type="natural"
                dataKey="level"
                stroke="#0077ff"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, color, bg, small }) {
  return (
    <div
      style={{
        background: bg,
        borderRadius: "15px",
        padding: "25px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <h3 style={{ color: "#555" }}>{title}</h3>

      <h1 style={{ color: color }}>{value}</h1>

      {small && <p style={{ color: "#666" }}>{small}</p>}
      
    </div>
  );
}

export default App;


