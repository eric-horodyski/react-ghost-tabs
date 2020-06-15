import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/react";

const Login: React.FC = () => {
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
          <IonButton expand="block" fill="outline" routerLink="/signup">
            Signup
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Login;
