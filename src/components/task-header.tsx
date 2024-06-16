import styles from "./task-header.module.css";

interface TaskListProps {
  numberOfTasksCreated: number;
  numberOfTasksCompleted: number;
}

export function TaskHeader({
  numberOfTasksCreated,
  numberOfTasksCompleted,
}: TaskListProps): JSX.Element {
  return (
    <header className={styles.container}>
      <aside>
        <span>Tarefas criadas</span>
        <div>
          <span>{numberOfTasksCreated}</span>
        </div>
      </aside>
      <aside>
        <span>Concluidas</span>
        <div>
          <span>
            {numberOfTasksCompleted === 0
              ? numberOfTasksCreated
              : `${numberOfTasksCompleted} de ${numberOfTasksCreated}`}
          </span>
        </div>
      </aside>
    </header>
  );
}
