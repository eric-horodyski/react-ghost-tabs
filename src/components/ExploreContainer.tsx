import React from "react";
import "./ExploreContainer.css";
import { IonButton } from "@ionic/react";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <p>
        <strong>{name}</strong>
      </p>
      <IonButton routerLink="/login">Return to Login</IonButton>
    </div>
  );
};

export default ExploreContainer;
