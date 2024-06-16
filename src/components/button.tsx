import { ComponentProps } from "react";

import styles from "./button.module.css";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({ ...rest }: ButtonProps): JSX.Element {
  return <button {...rest} className={styles.container} />;
}
