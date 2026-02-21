import type { Action, Task } from '@/types';

interface Props {
  task: Task;
  dispatch: React.ActionDispatch<[action: Action]>;
}

export default function TaskCard({ task, dispatch }: Props) {
  const onClick = () => {
    if (task.isComplete) {
      dispatch({ type: 'remove', data: { id: task.id } });
    } else {
      dispatch({ type: 'update', data: { updateId: task.id } });
    }
  };

  return (
    <div className="bg-[#181818] rounded-2xl p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-2">
          <span className="text-neutral-500 text-sm">{task.id.slice(-4)}</span>
          <h3 className="font-medium text-neutral-300">{task.task}</h3>
        </div>
        <div>
          <button onClick={onClick}>{task.isComplete ? '❌' : '✅'}</button>
        </div>
      </div>
    </div>
  );
}
