export type Task = {
  id: string;
  task: string;
  isComplete: boolean;
};

export type NewTask = Omit<Task, 'id'>;

export type Action =
  | { type: 'add'; data: NewTask }
  | { type: 'remove'; data: { id: Task['id'] } }
  | { type: 'update'; data: { updateId: Task['id'] } }; // we are going to update the isCompelte flag always
