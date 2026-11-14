
function TaskChecklist({ title, tasks, setTasks, onAddTask, showAddButton = false }) {

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((item) =>
        item.id === id
          ? { ...item, done: !item.done }
          : item
      )
    );
  }

  return (
    <section className="task-card">
      <div className="section-heading">
        <strong>{title}</strong>

        {showAddButton ? (
          <button className="add-task" onClick={onAddTask}>
            Add Task <b>+</b>
          </button>
        ) : (
          <span>Checklist</span>
        )}
      </div>

      {tasks.map((item) => (
        <label className="task-row" key={item.id}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleTask(item.id)}
          />

          <span className={item.done ? "completed" : ""}>
            {item.title}
          </span>
        </label>
      ))}
    </section>
  );
}

export default TaskChecklist;
