import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridMonth from "@fullcalendar/daygrid"; // a plugin!
import jaLocale from '@fullcalendar/core/locales/ja';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

const App = () => {
  const [events, setEvents] = useState([]);

  const handleDateClick = (e) => {
    const title = "event"
    const date = e.dateStr;
    setEvents(prev => [...prev, { title: title, date: date }])
  }

  return (
    <FullCalendar
      dateClick={handleDateClick}
      locale={"ja"}//日本語表記
      locales={[jaLocale]}
      plugins={[dayGridMonth, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek',
      }}//週で表示する
    />
  );
}

export default App