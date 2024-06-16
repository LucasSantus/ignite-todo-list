import { Trash } from "phosphor-react";
import { Fragment, useState } from "react";
import { Dialog } from "./dialog";

import styles from "./task-delete-dialog.module.css";

interface TaskDeleteDialogProps {
  id: string;
  onHandleDeleteTask: (id: string) => void;
}

export function TaskDeleteDialog({
  id,
  onHandleDeleteTask,
}: TaskDeleteDialogProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Trash size={16} color="#808080" />
      </button>
      <Dialog isOpen={isOpen}>
        <p className={styles.title}>Remoção de Tarefa</p>
        <span className={styles.description}>
          Está é uma ação irreversivel, tem certeza que deseja continuar? para
          prosseguir selecione o botão "Confirmar" abaixo.
        </span>

        <div className={styles.buttons}>
          <button
            onClick={() => {
              setIsOpen(false);
              onHandleDeleteTask(id);
            }}
          >
            Confirmar
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Fechar
          </button>
        </div>
      </Dialog>
    </Fragment>
  );
}
