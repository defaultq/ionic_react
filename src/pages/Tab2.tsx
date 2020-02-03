import React from "react";
import {
  IonSelectOption,
  IonSelect,
  IonItemDivider,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput
} from "@ionic/react";
import Converter from "../components/converter";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>C to C</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Converter></Converter>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
