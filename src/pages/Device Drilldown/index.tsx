import Card from "../../components/Card";
import SectionsMenu from "../../components/SectionsMenu";
import { ReactSVG } from "react-svg";
export default function DeviceDrilldown() {
  const iconsPath = {
    inverter: "/images/historyIcons/inverter.svg",
    solar_string: "/images/historyIcons/solar_string.svg",
  };

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

  return (
    <>
      <SectionsMenu noContent={true} />
      <div>
        <Card>
          <div style={styles.container}>
            <ul style={styles.list}>
              {maintenanceData.map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <span style={styles.icon}>
                    {
                      <ReactSVG
                        src={
                          iconsPath[item.type.toLowerCase()] ||
                          iconsPath.solar_string
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
                      <span style={styles.status(item.status)}>
                        {item.status}
                      </span>
                    </span>
                    <span style={styles.date}>{item.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </>
  );
}
