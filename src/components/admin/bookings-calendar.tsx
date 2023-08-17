"use client";

// import {
//   Calendar as BigCalendar,
//   momentLocalizer,
//   Views,
// } from "react-big-calendar";
// import moment from "moment";
// import { useMemo } from "react";

// const localizer = momentLocalizer(moment);

// Big Calendar
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";

// Date FNS
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
// Types
import { type Booking } from "~/types/models/booking";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function BookingsCalendar({ bookings }: Booking[]) {
  // Data format expected by Big Calendar
  // const events = [
  //   {
  //     id: 0,
  //     title: 'All Day Event very long title',
  //     allDay: true,
  //     start: new Date(2015, 3, 0),
  //     end: new Date(2015, 3, 1),
  //   },
  // ]

  const bookingsToEvents = (bookings) => {
    const events = [];
    bookings.map((booking) => {
      events.push({
        id: booking.id,
        title: `${booking?.car?.make?.label} - ${booking?.car?.color} ${booking?.car?.year}`,
        allDay: true,
        start: new Date(booking.start_date),
        end: new Date(booking.end_date),
      });
    });
    return events;
  };

  return (
    <BigCalendar
      className="p-12"
      localizer={localizer}
      events={bookingsToEvents(bookings)}
      style={{ height: "90vh" }}
      onView={() =>
        console.log("on view triggered, but its not changing views")
      }
    />
  );
}
