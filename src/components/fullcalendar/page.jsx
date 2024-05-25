"use client";

import React, { useRef, useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import ModalCreate from '../modal';
import ptLocace from '@fullcalendar/core/locales/pt-br'

const FullCalendar = () => {
  const calendarRef = useRef(null);

  const click = (valores) =>{
    // console.log(valores);
    // alert(valores.start)

   

   
//    alert("Funcionou!!")
  }

  useEffect(() => {
    const calendar = new Calendar(calendarRef.current, {

      plugins: [dayGridPlugin, interactionPlugin,timeGridPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        center: 'title',
        
      },

      selectable: true,
      select: click,
      // selectMirror: true,
      // dayMaxEvents: true,
      // editable: true,
      // droppable: true, // this allows things to be dropped onto the calendar!!!
    
      locale: ptLocace,
      

      events: [
        { title: 'Churrasco de japones', date: '2024-05-02' },
        { title: 'aniversario do nei', date: '2024-05-10' }
      ],


    });

    calendar.render();
  }, []);

  return (
    <div ref={calendarRef}></div>
  );
};

export default FullCalendar;

