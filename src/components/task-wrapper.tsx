import { PropsWithChildren } from "react";

import styles from "./task-wrapper.module.css";

interface TaskWrapperProps extends PropsWithChildren {}

export function TaskWrapper({ children }: TaskWrapperProps): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}
