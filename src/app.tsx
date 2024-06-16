import { Toaster } from "sonner";
import { useLocalStorage } from "usehooks-ts";
import { Form } from "./components/form";
import { Header } from "./components/header";
import { TaskList } from "./components/task-list";
import { Wrapper } from "./components/wrapper";
import { TASKS_LOCAL_STORAGE_KEY } from "./constants";
import { Task } from "./types/task";

import "./globals.css";

export function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(
    TASKS_LOCAL_STORAGE_KEY,
    []
  );

  const numberOfTasksCompleted = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  // function handleRemoveTask(id: number) {
  //   const filteredTasks = tasks.filter((task) => task.id !== id);

  //   if (!confirm("Deseja mesmo apagar essa tarefa?")) {
  //     return;
  //   }

  //   setTasks(filteredTasks);
  // }

  // function handleToggleTask({ id, value }: { id: number; value: boolean }) {
  //   const updatedTasks = tasks.map((task) => {
  //     if (task.id === id) {
  //       return { ...task, isChecked: value };
  //     }

  //     return { ...task };
  //   });

  //   setTasks(updatedTasks);
  // }

  return (
    <main>
      <Header />

      <Toaster richColors expand theme="dark" />

      <Wrapper>
        <Form setTasks={setTasks} />

        <TaskList
          numberOfTasksCreated={tasks.length}
          numberOfTasksCompleted={numberOfTasksCompleted}
        />
      </Wrapper>
    </main>
  );
}
