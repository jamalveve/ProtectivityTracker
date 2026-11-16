
import WelcomeSection from "./WelcomeSection";
import MiniCalendar from "./MiniCalendar";
import TaskChecklist from "./TaskChecklist";
import ScheduleCalendar from "./ScheduleCalendar";

import { createTask } from "../../services/taskService";

function DailyView({
  events,
  setEvents,
  selectedDate,
  setSelectedDate,
  myTasks,
  setMyTasks,
  otherTasks,
  setOtherTasks,
}) {

  async function addSport() {
    const title = window.prompt("Enter activity name:");

    if (!title?.trim()) return;

    const activityTime = window.prompt(
      "Enter start time (24-hour format, 08:00 to 19:59):"
    );

    if (!activityTime) return;

    const timeMatch = activityTime.match(
      /^([01]\d|2[0-3]):([0-5]\d)$/
    );

    if (!timeMatch) {
      alert("Enter time in HH:MM format, for example 08:30 or 17:45.");
      return;
    }

    const [hours, minutes] = activityTime.split(":").map(Number);
    const startMinutes = hours * 60 + minutes;

    if (startMinutes < 8 * 60 || startMinutes >= 20 * 60) {
      alert("Activities can only be scheduled between 8:00 AM and 8:00 PM.");
      return;
    }

    const formattedTime = new Date(2000, 0, 1, hours, minutes)
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0");

    const dateKey = `${year}-${month}-${day}`;

    try {
      const savedTask = await createTask({
        title: title.trim(),
        activityDate: dateKey,
        startMinutes: startMinutes,
        hours: formattedTime,
        color: "purple",
      });

      setEvents((previous) => [
        ...previous,
        {
          ...savedTask,
          date: savedTask.activityDate,
        },
      ]);

      alert("Activity saved successfully!");

    } catch (error) {
      console.error("Error saving activity:", error);
      alert("Could not save activity. Please check your backend.");
    }
  }

  function addTask() {
    const title = window.prompt("Enter a new task:");

    if (!title?.trim()) return;

    setMyTasks((previous) => [
      ...previous,
      { id: Date.now(), title: title.trim(), done: false },
    ]);
  }

  return (
    <>
      <WelcomeSection onAddSport={addSport} />

      <div className="content-grid">
        <aside className="left-panel">
          <MiniCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <TaskChecklist
            title="My Calendar"
            tasks={myTasks}
            setTasks={setMyTasks}
          />

          <TaskChecklist
            title="Other Calendar"
            tasks={otherTasks}
            setTasks={setOtherTasks}
            showAddButton
            onAddTask={addTask}
          />
        </aside>

        <ScheduleCalendar
          events={events}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </>
  );
}

export default DailyView;
