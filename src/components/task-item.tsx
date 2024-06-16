import { Check } from "phosphor-react";
import { Task } from "../types/task";

import { TaskDeleteDialog } from "./task-delete-dialog";
import styles from "./task-item.module.css";

interface TaskItemProps {
  task: Task;
  onHandleDeleteTask: (id: string) => void;
  onHandleToggleTask: ({ id, value }: { id: string; value: boolean }) => void;
}

export function TaskItem({
  task: { id, text, isChecked },
  onHandleDeleteTask,
  onHandleToggleTask,
}: TaskItemProps): JSX.Element {
  const checkboxCheckedStyles = isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];

  const paragraphCheckedStyles = isChecked ? styles["paragraph-checked"] : "";

  return (
    <div className={styles.container}>
      <div>
        <label
          htmlFor="checkbox"
          onClick={() => onHandleToggleTask({ id, value: !isChecked })}
        >
          <div>
            <input readOnly type="checkbox" checked={isChecked} />
            <span className={`${styles.checkbox} ${checkboxCheckedStyles}`}>
              {isChecked && <Check size={12} />}
            </span>
          </div>

          <p className={`${styles.paragraph} ${paragraphCheckedStyles}`}>
            {text}
          </p>
        </label>
      </div>

      <TaskDeleteDialog id={id} onHandleDeleteTask={onHandleDeleteTask} />
    </div>
  );
}
