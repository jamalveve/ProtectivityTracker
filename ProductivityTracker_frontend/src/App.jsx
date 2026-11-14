
// import { useState } from "react";
// import "./App.css";

// const initialEvents = [
//   { day: 0, time: 0, title: "Morning Run", hours: "10 AM - 11 AM", color: "green" },
//   { day: 2, time: 0, title: "Yoga Exercise", hours: "10 AM - 11 AM", color: "purple" },
//   { day: 4, time: 0, title: "Run Exercise", hours: "10 AM - 11 AM", color: "green" },
//   { day: 1, time: 1, title: "Yoga Exercise", hours: "10 AM - 11 AM", color: "purple" },
//   { day: 3, time: 1, title: "Cardio Exercise", hours: "10 AM - 11 AM", color: "green" },
//   { day: 5, time: 1, title: "Cardio Burned", hours: "10 AM - 11 AM", color: "green" },
//   { day: 0, time: 2, title: "Cardio Exercise", hours: "10 AM - 11 AM", color: "purple" },
//   { day: 2, time: 2, title: "Morning Run", hours: "13 AM - 14 AM", color: "green" },
//   { day: 4, time: 2, title: "Cardio Burned", hours: "10 AM - 11 AM", color: "purple" },
//   { day: 1, time: 3, title: "Yoga Exercise", hours: "10 AM - 11 AM", color: "purple" },
//   { day: 3, time: 3, title: "Cardio Exercise", hours: "10 AM - 11 AM", color: "purple" },
//   { day: 5, time: 3, title: "Cardio Burned", hours: "14 AM - 16 AM", color: "green" },
// ];

// const days = [
//   { date: "03", day: "Mon" },
//   { date: "04", day: "Tue" },
//   { date: "05", day: "Wed" },
//   { date: "06", day: "Thu" },
//   { date: "07", day: "Fri" },
//   { date: "08", day: "Sat" },
// ];

// function App() {
//   const [period, setPeriod] = useState("Daily");
//   const [theme, setTheme] = useState("Light");

//   const [events, setEvents] = useState(initialEvents);
//   const [selectedDate, setSelectedDate] = useState(5);

//   const [myTasks, setMyTasks] = useState([
//     { id: 1, title: "Plan daily activities", done: false },
//     { id: 2, title: "Complete morning exercise", done: true },
//   ]);

//   const [otherTasks, setOtherTasks] = useState([
//     { id: 3, title: "Review weekly goals", done: true },
//     { id: 4, title: "Prepare for tomorrow", done: true },
//   ]);

//   // Add a new activity
//   function addSport() {
//     const title = window.prompt("Enter activity name:");

//     if (!title || !title.trim()) return;

//     setEvents((previous) => [
//       ...previous,
//       {
//         day: 2,
//         time: 1,
//         title: title.trim(),
//         hours: "11 AM - 12 PM",
//         color: "green",
//       },
//     ]);
//   }

//   // Add a new task
//   function addTask() {
//     const title = window.prompt("Enter a new task:");

//     if (!title || !title.trim()) return;

//     setMyTasks((previous) => [
//       ...previous,
//       {
//         id: Date.now(),
//         title: title.trim(),
//         done: false,
//       },
//     ]);
//   }

//   // Mark a task as completed or incomplete
//   function toggleTask(id, list, setList) {
//     setList(
//       list.map((item) =>
//         item.id === id
//           ? { ...item, done: !item.done }
//           : item
//       )
//     );
//   }

//   return (
//     <div className={`page ${theme === "Dark" ? "dark" : ""}`}>
//       <main className="dashboard">

//         {/* LEFT SIDEBAR */}
//         <aside className="sidebar">
//           <div className="brand-symbol">◉</div>

//           <nav className="side-nav">
//             <button title="Home">⌂</button>
//             <button title="Dashboard">▣</button>
//             <button className="active" title="Calendar">▦</button>
//             <button title="Messages">▤</button>
//             <button title="Settings">⚙</button>
//           </nav>

//           <button className="logout" title="Logout">⇥</button>
//         </aside>

//         {/* MAIN CONTENT */}
//         <section className="main-area">

//           {/* TOP NAVIGATION */}
//           <header className="topbar">

//             <h2 className="brand-name">TimeFrame</h2>

//             <div className="period-tabs">
//               {["Daily", "Weekly", "Monthly"].map((item) => (
//                 <button
//                   key={item}
//                   className={period === item ? "selected" : ""}
//                   onClick={() => setPeriod(item)}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>

//             <div className="top-actions">

//               <div className="theme-switch">
//                 <button
//                   className={theme === "Dark" ? "theme-active" : ""}
//                   onClick={() => setTheme("Dark")}
//                 >
//                   Dark
//                 </button>

//                 <button
//                   className={theme === "Light" ? "theme-active" : ""}
//                   onClick={() => setTheme("Light")}
//                 >
//                   ☼ Light
//                 </button>
//               </div>

//               <button className="notification" title="Notifications">
//                 🔔
//               </button>

//               <div className="avatar">👨🏻</div>

//             </div>
//           </header>

//           {/* DAILY PAGE */}
//           {period === "Daily" && (
//             <>
//               <section className="welcome-row">

//                 <div>
//                   <h1>My Calendar</h1>
//                   <p>Information designed to accurate insights</p>
//                 </div>

//                 <div className="stats">

//                   <div>
//                     <span>Total workout today</span>
//                     <strong>3457 <small>hours</small></strong>
//                   </div>

//                   <div>
//                     <span>heart rate</span>
//                     <strong>90 <small>bpm</small></strong>
//                   </div>

//                   <button className="add-sport" onClick={addSport}>
//                     + &nbsp; Add Sport
//                   </button>

//                 </div>
//               </section>

//               <div className="content-grid">

//                 {/* LEFT PANEL */}
//                 <aside className="left-panel">

//                   {/* MINI CALENDAR */}
//                   <section className="mini-calendar">

//                     <div className="section-heading">
//                       <strong>January 2024</strong>

//                       <div>
//                         <button>‹</button>
//                         <button>›</button>
//                       </div>
//                     </div>

//                     <div className="mini-days">
//                       {[
//                         "Mon", "Tue", "Wed", "Thu",
//                         "Fri", "Sat", "Sun"
//                       ].map((day) => (
//                         <span key={day}>{day}</span>
//                       ))}
//                     </div>

//                     <div className="calendar-dates">
//                       {Array.from({ length: 35 }, (_, i) => {
//                         const date = i < 31 ? i + 1 : "";

//                         return (
//                           <button
//                             key={i}
//                             className={
//                               date === selectedDate
//                                 ? "date-selected"
//                                 : ""
//                             }
//                             onClick={() =>
//                               date && setSelectedDate(date)
//                             }
//                             disabled={!date}
//                           >
//                             {date}
//                           </button>
//                         );
//                       })}
//                     </div>

//                   </section>

//                   {/* MY TASKS */}
//                   <section className="task-card">

//                     <div className="section-heading">
//                       <strong>My Calendar</strong>
//                       <span>Checklist</span>
//                     </div>

//                     {myTasks.map((item) => (
//                       <label className="task-row" key={item.id}>

//                         <input
//                           type="checkbox"
//                           checked={item.done}
//                           onChange={() =>
//                             toggleTask(
//                               item.id,
//                               myTasks,
//                               setMyTasks
//                             )
//                           }
//                         />

//                         <span
//                           className={
//                             item.done ? "completed" : ""
//                           }
//                         >
//                           {item.title}
//                         </span>

//                       </label>
//                     ))}

//                   </section>

//                   {/* OTHER TASKS */}
//                   <section className="task-card other-card">

//                     <div className="section-heading">
//                       <strong>Other Calendar</strong>

//                       <button
//                         className="add-task"
//                         onClick={addTask}
//                       >
//                         Add Task <b>+</b>
//                       </button>
//                     </div>

//                     {otherTasks.map((item) => (
//                       <label className="task-row" key={item.id}>

//                         <input
//                           type="checkbox"
//                           checked={item.done}
//                           onChange={() =>
//                             toggleTask(
//                               item.id,
//                               otherTasks,
//                               setOtherTasks
//                             )
//                           }
//                         />

//                         <span
//                           className={
//                             item.done ? "completed" : ""
//                           }
//                         >
//                           {item.title}
//                         </span>

//                       </label>
//                     ))}

//                   </section>

//                 </aside>

//                 {/* MAIN CALENDAR */}
//                 <section className="schedule">

//                   <div className="schedule-heading">

//                     <strong>
//                       January {String(selectedDate).padStart(2, "0")} - 2024
//                     </strong>

//                     <div>
//                       <button onClick={() => setSelectedDate(5)}>
//                         Today
//                       </button>

//                       <button
//                         onClick={() =>
//                           setSelectedDate(
//                             Math.max(1, selectedDate - 1)
//                           )
//                         }
//                       >
//                         ‹
//                       </button>

//                       <button
//                         onClick={() =>
//                           setSelectedDate(
//                             Math.min(31, selectedDate + 1)
//                           )
//                         }
//                       >
//                         ›
//                       </button>
//                     </div>

//                   </div>

//                   <div className="calendar-board">

//                     <div className="timezone">GMT+8</div>

//                     <div className="day-headers">

//                       {days.map((day, index) => (
//                         <div
//                           className={
//                             index === 2 ? "today-column" : ""
//                           }
//                           key={day.date}
//                         >
//                           <strong>{day.date}</strong>
//                           <span>{day.day}</span>
//                         </div>
//                       ))}

//                     </div>

//                     <div className="time-grid">

//                       {["10 Am", "11 Am", "8 Am", "9 Am"].map(
//                         (time, row) => (

//                           <div className="time-row" key={time + row}>

//                             <span className="time-label">
//                               {time}
//                             </span>

//                             <div className="event-grid">

//                               {events
//                                 .filter((event) => event.time === row)
//                                 .map((event, index) => (

//                                   <article
//                                     key={`${row}-${index}-${event.title}`}
//                                     className={`event-card ${event.color}`}
//                                     style={{
//                                       gridColumn: event.day + 1,
//                                     }}
//                                   >
//                                     <strong>{event.title}</strong>
//                                     <span>{event.hours}</span>
//                                     <small>👤 👤 +3</small>
//                                   </article>

//                                 ))}

//                             </div>
//                           </div>

//                         )
//                       )}

//                     </div>
//                   </div>
//                 </section>

//               </div>
//             </>
//           )}

//           {/* WEEKLY PAGE */}
//           {period === "Weekly" && (
//             <section className="empty-page">
//               <h1>Weekly Calendar</h1>
//               <p>Weekly productivity view is coming soon.</p>
//             </section>
//           )}

//           {/* MONTHLY PAGE */}
//           {period === "Monthly" && (
//             <section className="empty-page">
//               <h1>Monthly Calendar</h1>
//               <p>Monthly productivity view is coming soon.</p>
//             </section>
//           )}

//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;



import { useState } from "react";
import "./App.css";

import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";
import ThemeSwitch from "./components/ThemeSwitch";

import DailyView from "./components/daily/DailyView";
import EmptyPeriodView from "./components/common/EmptyPeriodView";

import {
  initialEvents,
  initialMyTasks,
  initialOtherTasks,
} from "./data/initialData";

function App() {
  // Application navigation state
  const [period, setPeriod] = useState("Daily");

  // Application theme state
  const [theme, setTheme] = useState("Light");

  // Daily dashboard data
  const [events, setEvents] = useState(initialEvents);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [myTasks, setMyTasks] = useState(initialMyTasks);
  const [otherTasks, setOtherTasks] = useState(initialOtherTasks);

  return (
    <div className={`page ${theme === "Dark" ? "dark" : ""}`}>
      <main className="dashboard">

        {/* Sidebar */}
        <Sidebar />

        <section className="main-area">

          {/* Top Navigation */}
          <Topbar
            period={period}
            setPeriod={setPeriod}
            theme={theme}
            setTheme={setTheme}
          />

          {/* Daily Page */}
          {period === "Daily" && (
            <DailyView
              events={events}
              setEvents={setEvents}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              myTasks={myTasks}
              setMyTasks={setMyTasks}
              otherTasks={otherTasks}
              setOtherTasks={setOtherTasks}
            />
          )}

          {/* Weekly Page */}
          {period === "Weekly" && (
            <EmptyPeriodView period="Weekly" />
          )}

          {/* Monthly Page */}
          {period === "Monthly" && (
            <EmptyPeriodView period="Monthly" />
          )}

        </section>
      </main>
    </div>
  );
}

export default App;
