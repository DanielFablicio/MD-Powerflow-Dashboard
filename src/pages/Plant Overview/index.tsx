import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PlantOverview() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("plant-status");
  }, [navigate]);

  return null;
}
