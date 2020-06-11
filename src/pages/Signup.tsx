import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/react";

const Signup: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Signup</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div style={{ margin: "12em 1em" }}>
        <IonButton expand="block" routerLink="/login">
          Back to Login
        </IonButton>
      </div>
    </IonContent>
  </IonPage>
);
export default Signup;
