import { Fragment } from "react/jsx-runtime";
import { Task } from "../types/task";
import { TaskEmpty } from "./task-empty";
import { TaskItem } from "./task-item";

import { toast } from "sonner";
import styles from "./task-list.module.css";

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function TaskList({ tasks, setTasks }: TaskListProps): JSX.Element {
  function onHandleDeleteTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);

    toast.success("Tarefa foi removida com sucesso!", {
      duration: 3000,
      action: {
        label: "Desfazer",
        onClick: () => setTasks(tasks),
      },
      style: {
        padding: "10px",
      },
    });
  }

  function onHandleToggleTask({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...task, isChecked: value } : { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <Fragment>
      {tasks.length === 0 ? (
        <TaskEmpty />
      ) : (
        <div className={styles.list}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onHandleDeleteTask={onHandleDeleteTask}
              onHandleToggleTask={onHandleToggleTask}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
}
