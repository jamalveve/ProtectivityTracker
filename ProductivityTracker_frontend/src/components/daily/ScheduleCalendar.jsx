
function ScheduleCalendar({ events, selectedDate, setSelectedDate }) {
  // Find Monday of the selected date's week
  const monday = new Date(selectedDate);
  const dayOfWeek = monday.getDay();
  const difference = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

  monday.setDate(monday.getDate() + difference);

  // Generate Monday to Saturday
  const days = Array.from({ length: 6 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);

    return {
      date,
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      dateNumber: date.getDate(),
    };
  });

  const hours = Array.from({ length: 12 }, (_, index) => index + 8);

  function formatHour(hour) {
    const suffix = hour < 12 ? "AM" : "PM";
    const displayHour = hour % 12 || 12;
    return `${displayHour} ${suffix}`;
  }

  function getDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return (
    <section className="schedule-card">
      <div className="section-heading">
        <strong>My Schedule</strong>
        <span>
          Week of {monday.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>

      <div className="schedule-grid">
        <div className="time-column">
          <div className="day-heading">Time</div>

          {hours.map((hour) => (
            <div className="time-slot" key={hour}>
              {formatHour(hour)}
            </div>
          ))}
        </div>

        {days.map((day) => {
          const dateKey = getDateKey(day.date);

          return (
            <div className="schedule-day" key={dateKey}>
              <button
                className={
                  selectedDate.toDateString() === day.date.toDateString()
                    ? "day-heading selected-day"
                    : "day-heading"
                }
                onClick={() => setSelectedDate(day.date)}
              >
                <strong>{day.day}</strong>
                <span>{day.dateNumber}</span>
              </button>

              {hours.map((hour) => (
                <div className="schedule-cell" key={hour}>
                  {events
                    .filter(
                      (event) =>
                        event.date === dateKey &&
                        Math.floor(event.startMinutes / 60) === hour
                    )
                    .map((event) => (
                      <div
                        className={`event-card ${event.color}`}
                        key={event.id}
                      >
                        <strong>{event.title}</strong>
                        <small>{event.hours}</small>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ScheduleCalendar;
