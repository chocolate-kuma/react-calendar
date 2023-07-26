import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridMonth from "@fullcalendar/daygrid"; // a plugin!
import jaLocale from '@fullcalendar/core/locales/ja';
import timeGridPlugin from '@fullcalendar/timegrid';

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        locale={"ja"}//日本語表記
        locales={[jaLocale]}
        plugins={[dayGridMonth, timeGridPlugin]}
        initialView="dayGridMonth"
        events={[{ title: "event 1", date: "2023-07-26" }]}//イベントの追加
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek',
        }}//週で表示する
      />
    );
  }
}