import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const btn = () => {
    history.push("/signup", {
      direction: "forward",
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ margin: "12em 1em" }}>
          <IonButton
            expand="block"
            routerLink="/tabs/2"
            routerDirection="forward"
          >
            Login
          </IonButton>
          <IonButton expand="block" fill="outline" onClick={() => btn()}>
            Signup
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Login;
