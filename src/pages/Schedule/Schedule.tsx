import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import Calendar from './Calendar';

const Schedule: React.FC = () => {

  const { name } = useParams<{ name: string; }>();



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
       <Calendar/>
      </IonContent>
    </IonPage>
  );
};

export default Schedule;
