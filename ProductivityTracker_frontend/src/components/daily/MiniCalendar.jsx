
import { useState } from "react";

function MiniCalendar({ selectedDate, setSelectedDate }) {
  const [currentMonth, setCurrentMonth] = useState(
    new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
  );

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const totalDays = new Date(year, month + 1, 0).getDate();
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;

  const calendarDays = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: totalDays }, (_, index) => index + 1),
  ];

  const today = new Date();

  function previousMonth() {
    setCurrentMonth(new Date(year, month - 1, 1));
  }

  function nextMonth() {
    setCurrentMonth(new Date(year, month + 1, 1));
  }

  return (
    <section className="mini-calendar">
      <div className="section-heading">
        <strong>Calendar</strong>

        <div className="calendar-navigation">
          <button onClick={previousMonth}>‹</button>

          <span>
            {currentMonth.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>

          <button onClick={nextMonth}>›</button>
        </div>
      </div>

      <div className="mini-calendar-grid">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div className="weekday" key={day}>{day}</div>
        ))}

        {calendarDays.map((date, index) => {
          if (date === null) {
            return <div className="empty-date" key={`empty-${index}`} />;
          }

          const thisDate = new Date(year, month, date);

          const isSelected =
            selectedDate.toDateString() === thisDate.toDateString();

          const isToday =
            today.toDateString() === thisDate.toDateString();

          return (
            <button
              key={date}
              className={[
                "date-item",
                isSelected ? "selected-date" : "",
                isToday ? "today" : "",
              ].join(" ")}
              onClick={() => setSelectedDate(thisDate)}
            >
              <strong>{date}</strong>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default MiniCalendar;
