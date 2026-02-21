import React from 'react';
import TaskCard from './task';
import useTasks, { LOCAL_STORAGE_KEY } from '@/stores/tasks';

export default function Tasks() {
  const [tasks, dispatch] = useTasks();

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = Object.fromEntries(new FormData(e.currentTarget)) as { task: string };
    const task = payload.task?.trim();
    if (!task) return;
    dispatch({ type: 'add', data: { task, isComplete: false } });
    e.currentTarget.reset();
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit} className="flex items-center gap-3">
        <input
          type="text"
          name="task"
          placeholder="Enter task name"
          className="border border-neutral-600 bg-neutral-900 focus:border-indigo-400 outline-none flex-1 rounded-2xl p-3"
        />
        <button className="p-3 rounded-2xl bg-indigo-500 cursor-pointer" type="submit">
          Add Task
        </button>
      </form>
      <div className="space-y-4">
        <div className="text-sm text-neutral-500">Total: {tasks.length}</div>

        {!tasks.length && <p className="text-neutral-500 text-sm text-center mt-10">Start by adding tasks</p>}

        {tasks.map((task) => (
          <TaskCard task={task} dispatch={dispatch} key={task.id} />
        ))}
      </div>
    </React.Fragment>
  );
}
