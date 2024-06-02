
"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import styles from './page.module.css';

const FullCalendar = () => {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([
    { id: '1', title: 'Churrasco de japones', start: '2024-05-25T09:00:00', end: '2024-05-25T14:00:00', backgroundColor: '#FF9D00', textColor: '#000' },
    { id: '2', title: 'Aniversário do Gabrielelel', start: '2024-05-10' }
  ]);

  const handleDateClick = (arg) => {
    const title = prompt('Digite o título do evento:');
    if (title) {
      const newEvent = {
        id: String(events.length + 1), // Gera um ID único
        title: title,
        start: arg.date,
        allDay: true
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleEditClick = (info) => {
    const eventId = info.event.id;
    const eventTitle = info.event.title;
    const newTitle = prompt('Digite o novo título do evento:', eventTitle);
    if (newTitle) {
      const updatedEvents = events.map(event =>
        event.id === eventId ? { ...event, title: newTitle } : event
      );
      setEvents(updatedEvents);
    }
  };

  const handleDeleteClick = (info) => {
    const eventId = info.event.id;
    const eventTitle = info.event.title;
    if (window.confirm(`Tem certeza que deseja deletar o evento "${eventTitle}"?`)) {
      const updatedEvents = events.filter(event => event.id !== eventId);
      setEvents(updatedEvents);
    }
  };

  useEffect(() => {
    const calendar = new Calendar(calendarRef.current, {
      selectable: true,
      locale: ptLocale,
      timeZone: 'local',
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'dayGridMonth,timeGridWeek,timeGridDay',
        center: 'title',
        right: 'today prev,next'
      },
      events: events,
      dateClick: handleDateClick,
      eventContent: (arg) => {
        const containerEl = document.createElement('div');
        const editButton = document.createElement('button');
        editButton.innerHTML = 'Editar';
        editButton.onclick = () => handleEditClick(arg);
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Excluir';
        deleteButton.onclick = () => handleDeleteClick(arg);
        containerEl.appendChild(editButton);
        containerEl.appendChild(deleteButton);
        const titleEl = document.createElement('div');
        titleEl.innerText = arg.event.title;
        containerEl.appendChild(titleEl);
        return { domNodes: [containerEl] };
      }
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, [events]);

  return (
    <div ref={calendarRef} className={styles.calendar}></div>
  );
};

export default FullCalendar;
