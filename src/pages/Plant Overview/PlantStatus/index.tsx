import { ReactNode } from "react";
import Card from "../../../components/Card";
import HSBar from "react-horizontal-stacked-bar-chart";
import SectionsMenu from "../../../components/SectionsMenu";

export default function PlantStatus() {
  return (
    <>
      <SectionsMenu
        baseURL="dashboard/portfolio/solar-farm-1/plant-overview"
        titles={["PLANT STATUS", "INVERTERS", "STRINGS", "IRRADIANCE"]}
      />
      <Container>
        <Card title="Plant Potential Income">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "red", margin: "0", fontSize: "36px" }}>
              {" "}
              $4,567,000,000{" "}
            </h1>
            <h4 style={{ color: "red" }}> 99.99% </h4>
          </div>
        </Card>
        <Card title="Plant Insights">
          {/*<p>
          Click a insight topic to only see plants with insights under this
          topic
        </p>*/}
          {
            //<button>Explore All</button>
          }
          <h4>Recovery Energy Breakdown</h4>
          <div>
            <HSBar
              showTextDown
              fontColor="var(--text-color)"
              height={16}
              data={[
                { value: 10, description: "$10.00", color: "red" },
                { value: 5, description: "$5.000", color: "#FF8C09" },
                { value: 3, description: "$3.000", color: "#FFDA09" },
              ]}
            />
          </div>
        </Card>
      </Container>
    </>
  );
}

function Container({ children }: { children: ReactNode }) {
  return <div style={{ display: "flex", gap: "24px" }}>{children}</div>;
}
