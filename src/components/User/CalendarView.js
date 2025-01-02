import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './CalendarView.css';

const CalendarView = () => {
  const events = [
    { title: 'LinkedIn Post', date: '2024-12-24' },
    { title: 'Email', date: '2024-12-26' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Calendar
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
      </div>
    </div>
  );
};

export default CalendarView;
