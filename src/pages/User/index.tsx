import { ReactNode } from "react";
import Card from "../../components/Card";
import SectionsMenu from "../../components/SectionsMenu";

export default function User() {
  const userData = {
    name: "Harrison Webb (You)",
    email: "harrison_webb@gmail.com",
    access: "administrator",
    logeddData: "Now",
  };

  const isLogged: boolean = userData.logeddData.toLowerCase() == "now";

  return (
    <>
      <SectionsMenu noContent={true} />
      <Container>
        <div style={styles.UserContainer}>
          <Card title={userData.name}>
            <div style={{ display: "flex", flex: "0 1 auto" }}>
              <div style={styles.UserImage}>
                <img
                  src="https://i.pinimg.com/736x/3e/aa/24/3eaa245d923949b6f662b8ba07b7a3b2.jpg"
                  alt=""
                  width={120}
                  height={120}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
              <div style={styles.UserInfo}>
                <span style={styles.UserInfoSpan()}>
                  Email: {userData.email}
                </span>
                <span style={styles.UserInfoSpan()}>
                  Acess: {userData.access}
                </span>
                <span style={styles.UserInfoSpan(isLogged)}>
                  Logged in: {userData.logeddData}{" "}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}

function Container({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

const styles = {
  UserContainer: {
    display: "flex",
    width: "480px",
  },
  UserImage: {
    display: "flex",
    width: "120px",
    height: "120px",
    alignItems: "center",
    justifyContent: "center",
  },
  UserInfo: {
    display: "flex",
    flexDirection: "column",

    marginLeft: "24px",
    justifyContent: "center",
    gap: "8px",
  },
  UserInfoSpan: (isLogged = false) => ({
    color: isLogged ? "var(--green)" : "var(--text-color)",
    fontSize: "18px",
  }),
};
