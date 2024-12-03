import Card from "../../../components/Card";
import SectionsMenu from "../../../components/SectionsMenu";

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

export default function Irradiance() {
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

  return (
    <>
      <SectionsMenu
        baseURL="dashboard/portfolio/solar-farm-1/plant-overview"
        titles={["PLANT STATUS", "INVERTERS", "STRINGS", "IRRADIANCE"]}
      />

      <div style={{ display: "flex", flex: "1 1 100%" }}>
        <Card title="Irradiation Graphic">
          <div
            style={{
              display: "flex",
              flex: "1",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "300px",
                display: "flex",
                alignItems: "center",
              }}
            >
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
          </div>
        </Card>
      </div>
    </>
  );
}
