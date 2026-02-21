import { useReducer } from 'react';
import type { Task, Action } from '@/types';

function reducer(prevState: Task[], action: Action) {
  switch (action.type) {
    case 'add': {
      const copy = structuredClone(prevState);
      copy.push({ id: crypto.randomUUID(), ...action.data });
      return copy;
    }
    case 'remove': {
      return prevState.filter((task) => task.id !== action.data.id);
    }
    case 'update': {
      return prevState.map((task) => (task.id === action.data.updateId ? { ...task, isComplete: true } : task));
    }
  }
}

export const LOCAL_STORAGE_KEY = 'tasks';
const initialState: Task[] = [];

export default function useTasks() {
  return useReducer(reducer, initialState, (def) => {
    const tasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!tasks) return def;
    return [...def, ...JSON.parse(tasks)];
  });
}
