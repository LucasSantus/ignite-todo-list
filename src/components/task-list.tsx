import { Task } from "../types/task";
import { TaskEmpty } from "./task-empty";

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function TaskList({ tasks, setTasks }: TaskListProps): JSX.Element {
  return <TaskEmpty />;
}
