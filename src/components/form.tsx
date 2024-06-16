import { Button } from "./button";
import { Input } from "./input";

import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { toast } from "sonner";
import { Task } from "../types/task";
import styles from "./form.module.css";

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function Form({ setTasks }: FormProps): JSX.Element {
  const [value, setValue] = useState<string>("");

  function onHandleCreateNewTask() {
    if (!value) {
      toast.error("Insira um valor para registrar uma nova tarefa!", {
        style: {
          padding: "10px",
        },
      });
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      text: value,
      isChecked: false,
    };

    setTasks((currentValue) => [...currentValue, newTask]);

    setValue("");
  }

  return (
    <div className={styles.form}>
      <Input
        placeholder="Adicione uma nova tarefa"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <Button onClick={onHandleCreateNewTask}>
        Criar
        <PlusCircle size={16} />
      </Button>
    </div>
  );
}
