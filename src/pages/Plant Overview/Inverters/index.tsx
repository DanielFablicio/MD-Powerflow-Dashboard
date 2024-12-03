import SectionsMenu from "../../../components/SectionsMenu";
import Card from "../../../components/Card";

const inverters = [
  {
    id: "Inverter 002",
    model: "Huawei 3 kW",
    status: "Offline (Error)",
    potency: "0 kW",
    efficiency: "-",
    temperature: "-",
    lastMaintenance: "2024-10-10",
  },
  {
    id: "Inverter 001",
    model: "Huawei 3kW",
    status: "Needs inspection",
    potency: "165 kW",
    efficiency: "62%",
    temperature: "75.0°C / 348.15 K",
    lastMaintenance: "2024-11-01",
  },
  {
    id: "Inverter 003",
    model: "Huawei 3kW",
    status: "Needs inspection",
    potency: "220 kW",
    efficiency: "97.5%",
    temperature: "45.0°C / 318.15 K",
    lastMaintenance: "2024-07-17",
  },
  {
    id: "Inverter 004",
    model: "Huawei 3kW",
    status: "Online",
    potency: "3 kW",
    efficiency: "97.5%",
    temperature: "45.0°C / 318.15 K",
    lastMaintenance: "2024-05-01",
  },
];

export default function Inverters() {
  return (
    <>
      <SectionsMenu
        baseURL="dashboard/portfolio/solar-farm-1/plant-overview"
        titles={["PLANT STATUS", "INVERTERS", "STRINGS", "IRRADIANCE"]}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "16px",
        }}
      >
        {inverters.map((inverter) => (
          <Card
            key={inverter.id}
            title={inverter.id}
            color={
              inverter.status === "Offline (Error)"
                ? "#f00"
                : inverter.status == "Needs inspection"
                  ? "#ffa500"
                  : "var(--text-color)"
            }
            maxWidth={400}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <img
                src="https://loja.ecosist.net/media/catalog/product/cache/b1fe295630155e6c96292937b987c725/2/5/255550-huawei-sun2000-2ktl-l1-0_2.jpeg"
                alt=""
                width={100}
                height={100}
              />
              <div>
                <p>Model: {inverter.model}</p>
                <p>Status: {inverter.status}</p>
                <p>Potency(W): {inverter.potency}</p>
                <p>Efficiency: {inverter.efficiency}</p>
                <p>Temperature: {inverter.temperature}</p>
                <p>Last maintenance: {inverter.lastMaintenance}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
