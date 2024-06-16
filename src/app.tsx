import { Toaster } from "sonner";
import { useLocalStorage } from "usehooks-ts";
import { Form } from "./components/form";
import { Header } from "./components/header";
import { TaskHeader } from "./components/task-header";
import { Wrapper } from "./components/wrapper";
import { TASKS_LOCAL_STORAGE_KEY } from "./constants";
import { Task } from "./types/task";

import { TaskList } from "./components/task-list";
import { TaskWrapper } from "./components/task-wrapper";
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

  return (
    <main>
      <Header />

      <Toaster richColors expand theme="dark" />

      <Wrapper>
        <Form setTasks={setTasks} />

        <TaskWrapper>
          <TaskHeader
            numberOfTasksCreated={tasks.length}
            numberOfTasksCompleted={numberOfTasksCompleted}
          />

          <TaskList tasks={tasks} setTasks={setTasks} />
        </TaskWrapper>
      </Wrapper>
    </main>
  );
}
