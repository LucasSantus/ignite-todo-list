import { PropsWithChildren } from "react";

import styles from "./wrapper.module.css";

interface WrapperProps extends PropsWithChildren {}

export function Wrapper({ children }: WrapperProps): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}
