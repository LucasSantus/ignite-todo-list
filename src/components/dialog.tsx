import { PropsWithChildren } from "react";

import { createPortal } from "react-dom";
import styles from "./dialog.module.css";

interface DialogProps extends PropsWithChildren {
  isOpen: boolean;
}

export function Dialog({ isOpen, children }: DialogProps): JSX.Element | null {
  if (!isOpen) return null;

  const portalRoot = document.createElement("div");
  document.body.appendChild(portalRoot);

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.content}>{children}</div>
    </div>,
    portalRoot
  );
}
