import { ComponentProps } from "react";

import styles from "./input.module.css";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ ...rest }: InputProps): JSX.Element {
  return <input {...rest} className={styles.container} />;
}
