import "./App.css";
import Sidebar from "./components/Sidebar";
import InfoTitle from "./components/InfoTitle";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import MainContent from "./components/MainContent";
import PlantStatus from "./pages/Plant Overview/PlantStatus";
import PlantOverview from "./pages/Plant Overview";
import { MenuProvider } from "./contexts/MenuContext";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Inverters from "./pages/Plant Overview/Inverters";
import Irradiance from "./pages/Plant Overview/Irradiance";
import PlantHeatMap from "./pages/Plant Heat Map";
import Strings from "./pages/Plant Overview/Strings";
import DeviceDrilldown from "./pages/Device Drilldown";

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
      <MenuProvider>
        <Sidebar />
      </MenuProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <InfoTitle />

        <MainContent>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="dashboard/profile" element={<User />} />
            <Route
              path="/dashboard/portfolio/solar-farm-1/plant-overview/"
              element={
                <Navigate to="/dashboard/portfolio/solar-farm-1/plant-overview/plant-status" />
              }
            />
            <Route
              path="/dashboard/portfolio/solar-farm-1/plant-overview/plant-status"
              element={<PlantStatus />}
            />
            <Route
              path="/dashboard/portfolio/solar-farm-1/plant-overview/inverters"
              element={<Inverters />}
            />
            <Route
              path="/dashboard/portfolio/solar-farm-1/plant-overview/strings"
              element={<Strings />}
            />
            <Route
              path="/dashboard/portfolio/solar-farm-1/plant-overview/irradiance"
              element={<Irradiance />}
            />

            <Route
              path="/dashboard/portfolio/solar-farm-1/device-drilldown"
              element={<DeviceDrilldown />}
            />
          </Routes>
        </MainContent>
      </div>
    </div>
  );
}

export default App;
