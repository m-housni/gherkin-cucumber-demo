import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get("http://localhost:5000/dashboard", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setMessage(res.data.message);
      } catch (err) {
        console.log(err.getMessage());
        navigate("/login");
      }
    };
    fetchDashboard();
  }, [navigate]);

  return (
    <div className="dashboard flex items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold">{message}</h1>
    </div>
  );
}
