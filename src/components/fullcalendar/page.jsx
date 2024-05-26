"use client";

import React, { useRef, useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import ModalCreate from '../modal';
import ptLocace from '@fullcalendar/core/locales/pt-br';
import styles from './page.module.css';

const FullCalendar = () => {
  const calendarRef = useRef(null);

  const handleDateClick = (arg) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView('timeGridDay', arg.dateStr);
  };

  const click = (valores) => {
    // console.log(valores);
    // alert(valores.start)




    //    alert("Funcionou!!")
  }

  useEffect(() => {
    const calendar = new Calendar(calendarRef.current, {
      locale: ptLocace,
      timeZone: 'local',
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'dayGridMonth,timeGridWeek,timeGridDay', // botoes mês semana e dia
        center: 'title', // titulo (mês)
        end: 'today prev,next' // botao de proximo mes
      },

      events: [
        { title: 'Churrasco de japones', start: '2024-05-25T09:00:00', end: '2024-05-25T14:00:00', backgroundColor: '#FF9D00', textColor: '#000' },
        { title: 'aniversario do nei', date: '2024-05-10' }
      ],

      // selectable: true,
      // select: click,
      // selectMirror: true,
      // dayMaxEvents: true,
      // editable: true,
      // droppable: true, // this allows things to be dropped onto the calendar!!!

    });

    calendar.render();
  }, []);

  return (
    <div ref={calendarRef}></div>
  );
};

export default FullCalendar;

