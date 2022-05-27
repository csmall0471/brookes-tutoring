import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel, MonthAgenda } from '@syncfusion/ej2-react-schedule'
import './Calendar.css';

const Calendar: React.FC = () => {

  const events: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        Subject: "Zane Deaton",
        EndTime: new Date(2022, 4, 19, 8, 40),
        StartTime: new Date(2022, 4, 19, 5, 40)
      }
    ]
  }

  return (
        <ScheduleComponent currentView="Week" eventSettings={events}>
          <Inject services={[Day, Week, Month]} />
        </ScheduleComponent>
  );
};

export default Calendar;
