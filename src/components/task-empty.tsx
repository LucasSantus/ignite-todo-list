import styles from "./task-empty.module.css";

export function TaskEmpty(): JSX.Element {
  return (
    <div className={styles.container}>
      <img
        src="/clipboard.png"
        alt="Imagem de um ClipBoard"
        width="56px"
        height="56px"
      />

      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
