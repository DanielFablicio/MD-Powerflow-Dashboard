import SectionsMenu from "../../../components/SectionsMenu";
import styles from "./Strings.module.css";

export default function Strings() {
  const strings = [
    {
      id: "A4",
      status: "Defect",
      voltage: "000 V",
      current: "00.00 A",
      production: "3.2 MWh",
    },
    {
      id: "A3",
      status: "Irregular",
      voltage: "330 V",
      current: "6.10 A",
      production: "4.7 MWh",
    },
    {
      id: "A2",
      status: "Irregular",
      voltage: "330 V",
      current: "4.66 A",
      production: "4.2 MWh",
    },
    {
      id: "A1",
      status: "Normal",
      voltage: "330 V",
      current: "12.30 A",
      production: "5.7 MWh",
    },
    {
      id: "A5",
      status: "Normal",
      voltage: "330 V",
      current: "12.30 A",
      production: "5.7 MWh",
    },
    {
      id: "A6",
      status: "Normal",
      voltage: "330 V",
      current: "12.30 A",
      production: "5.7 MWh",
    },
    {
      id: "A7",
      status: "Normal",
      voltage: "330 V",
      current: "12.30 A",
      production: "5.7 MWh",
    },
  ];

  return (
    <>
      <SectionsMenu
        baseURL="dashboard/portfolio/solar-farm-1/plant-overview"
        titles={["PLANT STATUS", "INVERTERS", "STRINGS", "IRRADIANCE"]}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {strings.map((string) => (
          <div key={string.id}>
            <div
              className={
                string.status === "Defect"
                  ? styles.StatusDefect
                  : string.status === "Irregular"
                    ? styles.StatusIrregular
                    : styles.StatusNormal
              }
            >
              <p style={{ marginRight: "12px" }}>
                <strong>String {string.id} </strong>
              </p>

              <p>Status: {string.status}</p>
              <p>Voltage: {string.voltage}</p>
              <p>Current(A): {string.current}</p>
              <p>Production(A): {string.production}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
