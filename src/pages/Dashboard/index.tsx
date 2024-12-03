import { CSSProperties, ReactNode, useEffect, useState } from "react";
import Card from "../../components/Card";
import HSBar from "react-horizontal-stacked-bar-chart";
import SectionsMenu from "../../components/SectionsMenu";

const getClimate = async () => {
  const response = await fetch(
    "https://apiprevmet3.inmet.gov.br/estacao/proxima/2510808",
  );
  const data = await response.json();
  return data;
};

export default function Dashboard() {
  const [climateData, setClimateData] = useState(null); // Estado para armazenar os dados do clima
  const [loading, setLoading] = useState(true); // Estado para gerenciar o carregamento

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClimate();
        setClimateData(data); // Atualiza os dados no estado
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar os dados do clima:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchData(); // Chama a função
  }, []); // Array vazio para executar o efeito apenas uma vez

  return (
    <>
      <SectionsMenu noContent={true}></SectionsMenu>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: "1",
            width: "100%",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: "0 2 auto",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Card title="Plant Insights">
              <h4>Recovery Energy Breakdown</h4>
              <div>
                <HSBar
                  showTextDown
                  fontColor="var(--text-color)"
                  height={16}
                  data={[
                    { value: 2, description: "$12.97", color: "red" },
                    { value: 5, description: "$32.00", color: "#FF8C09" },
                    { value: 3, description: "$45.35", color: "#FFDA09" },
                  ]}
                />
              </div>
            </Card>
            <Card title="Action Plan">
              <h4>Recoverable Energy Breakdown</h4>
              <div>
                <HSBar
                  showTextDown
                  fontColor="var(--text-color)"
                  height={16}
                  data={[
                    { value: 4, description: "$390.35", color: "red" },
                    { value: 4, description: "$200.00", color: "#FF8C09" },
                    { value: 3, description: "$400.00", color: "#FFDA09" },
                  ]}
                />
              </div>
            </Card>
          </div>
          <div style={{ display: "flex", flex: "1 1 auto" }}>
            <Card title="Irradiation">
              <IrradiationChart />
            </Card>
          </div>
          <div style={{ display: "flex", flex: "1" }}>
            <Card title="Climate">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  width: "276px",
                  height: "108px",
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3534/3534501.png"
                    alt=""
                    width={32}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    {loading
                      ? "loading..."
                      : climateData?.dados?.TEM_INS || "error"}{" "}
                    ºC
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/517/517287.png"
                    alt=""
                    width={32}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    {loading
                      ? "loading..."
                      : climateData?.dados?.VEN_VEL || "error"}
                  </span>{" "}
                  m/s
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5664/5664982.png"
                    alt=""
                    width={32}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    {loading
                      ? "loading..."
                      : climateData?.dados?.UMD_INS || "error"}{" "}
                    %
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/169/169367.png"
                    alt=""
                    width={32}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    {loading
                      ? "loading..."
                      : climateData?.dados?.RAD_GLO || "error"}
                    kJ/m²
                  </span>
                </div>
              </div>
              {/*<div
                style={{
                  backgroundColor: "var(--quaternary-color)",
                  width: "276px",
                  height: "84px",
                  borderRadius: "6px",
                  padding: "10px",
                  boxSizing: "border-box",
                }}
              >
                <h4 style={{ marginBottom: "8px" }}>Resume</h4>
                <p style={{ fontSize: "14px" }}>
                  Many clouds with a chance of isolated rain
                </p>
                </div>*/}
            </Card>
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px", width: "100%" }}>
          <div style={{ display: "flex", flex: "1 1 50%", gap: "16px" }}>
            <div style={{ display: "flex", flex: "0 1 auto" }}>
              <Card title="Potential Income" maxHeight={240}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <h1 style={{ color: "red", margin: "0", fontSize: "36px" }}>
                    {" "}
                    $4,567,000,000{" "}
                  </h1>
                  <h4 style={{ color: "red" }}> 99.99% </h4>
                </div>
              </Card>
            </div>

            <div style={{ display: "flex", flex: "2" }}>
              <Card title="Weekly PR" maxHeight={240}>
                <div style={{ flex: "1" }}>
                  <WeeklyPRChart />
                </div>
              </Card>
            </div>
          </div>
          <div style={{ display: "flex", flex: "1" }}>
            <Card title="Manteinace History">
              <MaintenanceHistory />
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", // Permite quebra de linha
        gap: "16px", // Espaçamento entre os itens
        alignItems: "flex-start", // Alinha os itens pelo topo
        width: "100%", // Garante que o contêiner ocupe toda a largura
        boxSizing: "border-box",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
}

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ReactSVG } from "react-svg";

// Dados aleatórios para o gráfico
const data = [
  { month: "Jan", irradiation: 7.0, predicted: 6.8 },
  { month: "Feb", irradiation: 6.9, predicted: 6.7 },
  { month: "Mar", irradiation: 6.8, predicted: 6.6 },
  { month: "Abr", irradiation: 6.4, predicted: 6.3 },
  { month: "Mai", irradiation: 5.5, predicted: 5.4 },
  { month: "Jun", irradiation: 5.0, predicted: 4.9 },
  { month: "Jul", irradiation: 5.3, predicted: 5.2 },
  { month: "Ago", irradiation: 6.2, predicted: 6.1 },
  { month: "Set", irradiation: 6.8, predicted: 6.7 },
  { month: "Out", irradiation: 6.9, predicted: 6.8 },
  { month: "Nov", irradiation: 6.7, predicted: 6.5 },
];

function IrradiationChart() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 50, bottom: 20, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="month" tick={{ fill: "var(--text-color)" }} />
          <YAxis tick={{ fill: "var(--text-color)" }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="irradiation"
            stroke="#ffcc00"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="#007bff"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const data2 = [
  { day: "Mon", value: 400 },
  { day: "Tue", value: 300 },
  { day: "Wed", value: 200 },
  { day: "Thu", value: 100 },
  { day: "Fri", value: 140 },
];

function WeeklyPRChart() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer>
        <BarChart
          data={data2}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="day" tick={{ fill: "var(--text-color)" }} />
          <YAxis tick={{ fill: "var(--text-color)" }} />
          <Tooltip />
          <Bar dataKey="value" fill="#87CEEB" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const maintenanceData = [
  {
    type: "Inverter",
    name: "Inverter 003",
    status: "Fixed",
    date: "19/11/2024",
  },
  {
    type: "Inverter",
    name: "Inverter 007",
    status: "Upkeep",
    date: "17/11/2024",
  },
  {
    type: "String",
    name: "String A121",
    status: "Upkeep",
    date: "17/11/2024",
  },
  {
    type: "String",
    name: "String A254",
    status: "Fixed",
    date: "11/11/2024",
  },
  {
    type: "String",
    name: "String A123",
    status: "Fixed",
    date: "28/10/2024",
  },
  {
    type: "Inverter",
    name: "Inverter 005",
    status: "Upkeep",
    date: "20/10/2024",
  },
  {
    type: "String",
    name: "String A300",
    status: "Upkeep",
    date: "15/10/2024",
  },
  {
    type: "Inverter",
    name: "Inverter 002",
    status: "Fixed",
    date: "10/10/2024",
  },
  {
    type: "String",
    name: "String B101",
    status: "Fixed",
    date: "05/10/2024",
  },
  {
    type: "Inverter",
    name: "Inverter 004",
    status: "Upkeep",
    date: "01/10/2024",
  },
];

function MaintenanceHistory() {
  const iconsPath = {
    inverter: "/images/historyIcons/inverter.svg",
    solar_string: "/images/historyIcons/solar_string.svg",
  };
  console.log(maintenanceData[0]);
  return (
    <div style={styles.container}>
      <ul style={styles.list}>
        {maintenanceData.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <span style={styles.icon}>
              {
                <ReactSVG
                  src={
                    iconsPath[item.type.toLowerCase()] || iconsPath.solar_string
                  }
                  beforeInjection={(svg) => {
                    svg.setAttribute("width", "32px");
                    svg.setAttribute("height", "32px");
                    svg.setAttribute("fill", "var(--text-color)");
                  }}
                />
              }
            </span>
            <div style={styles.details}>
              <span style={styles.name}>
                {item.name}{" "}
                <span style={styles.status(item.status)}>{item.status}</span>
              </span>
              <span style={styles.date}>{item.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "transparent",
    padding: "0 12px",
    borderRadius: "8px",
    color: "var(--text-color)",
    width: "100%",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  list: {
    listStyleType: "none",
    margin: "0",
    padding: "0",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #333",
  },
  icon: {
    marginRight: "16px",
  },
  details: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontWeight: "bold",
  },
  status: (status: string) => ({
    color: status === "Fixed" ? "#4CAF50" : "#2196F3",
    marginLeft: "8px",
  }),
  date: {
    fontSize: "14px",
    color: "#888",
  },
};
