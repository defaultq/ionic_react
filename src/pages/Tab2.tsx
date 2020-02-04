import React from "react";
import {
   IonContent,
  IonHeader,
   IonPage,
  IonTitle,
  IonToolbar,
 } from "@ionic/react";
 
import Converter from "../components/converter";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Currency</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Converter></Converter>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
