import "./App.css";
import Sidebar from "./components/Sidebar";
import InfoTitle from "./components/InfoTitle";
import SectionsMenu from "./components/SectionsMenu";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";
import PlantStatus from "./pages/Plant Overview/PlantStatus";
import PlantOverview from "./pages/Plant Overview";

function App() {
  /*
  const getResponseDataTime = async () => {
    const response = await fetch(
      "https://apiprevmet3.inmet.gov.br/estacao/proxima/2510808",
    );
    return await response.json();
  };

  const displayData = async () => {
    const { dados } = await getResponseDataTime();
    console.log(dados);
  };
  displayData();
  */
  return (
    <div className="appWrapper">
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <InfoTitle />
        <SectionsMenu
          baseURL="plant-overview"
          titles={["PLANT STATUS", "INVERTER", "STRINGS", "IRRADIANCE"]}
        />
        <MainContent>
          <Routes>
            <Route path="/plant-overview" element={<PlantOverview />} />
            <Route
              path="/plant-overview/plant-status"
              element={<PlantStatus />}
            />
          </Routes>
        </MainContent>
      </div>
    </div>
  );
}

export default App;
