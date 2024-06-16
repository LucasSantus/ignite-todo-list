import { ComponentProps } from "react";

import styles from "./header.module.css";

interface HeaderProps extends ComponentProps<"input"> {}

export function Header({ ...rest }: HeaderProps): JSX.Element {
  return (
    <header className={styles.container} {...rest}>
      <img
        src="/logo.svg"
        alt="Ignite - Todo List Logo"
        width="132px"
        height="52px"
      />
    </header>
  );
}
