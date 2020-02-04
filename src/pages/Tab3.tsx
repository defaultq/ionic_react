import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CryptoConverter from '../components/cryptoconverter';
const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent><CryptoConverter></CryptoConverter></IonContent>
    </IonPage>
  );
};

export default Tab3Page;
