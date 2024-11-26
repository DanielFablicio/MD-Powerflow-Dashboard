import { ReactNode } from "react";
import Card from "../../../components/Card";
import HSBar from "react-horizontal-stacked-bar-chart";

export default function PlantStatus() {
  return (
    <Container>
      <Card height={192} width={492} title="Plant Potential Income"></Card>
      <Card height={192} width={492} title="Plant Insights">
        <p>
          Click a insight topic to only see plants with insights under this
          topic
        </p>
        <button>Explore All</button>
        <h4>Recovery Energy Breakdown</h4>
        <HSBar
          showTextIn
          fontColor="black"
          height={24}
          data={[
            { value: 10, description: "$10.00", color: "red" },
            { value: 5, description: "$5.000", color: "#FF8C09" },
            { value: 3, description: "$3.000", color: "#FFDA09" },
          ]}
        />
      </Card>
    </Container>
  );
}

function Container({ children }: { children: ReactNode }) {
  return <div style={{ display: "flex", gap: "24px" }}>{children}</div>;
}
