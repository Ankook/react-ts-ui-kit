import React, { SyntheticEvent } from "react";
import cx from "classnames";
import styles from "./editingConfirmationButton.module.scss";
import { ReactComponent as Checkmark } from "../../../../src/assets/editingConfirmationCheckmark.svg";

interface Props {
  className?: string;
  onClick?: ((e: SyntheticEvent) => void) | (() => void);
}

const EditingConfirmationButton: React.FC<Props> = ({ className, onClick }) => {
  return (
    <div
      className={cx(styles.editingConfirmationButton, className)}
      onClick={onClick}
    >
      <Checkmark className={styles.checkmark}/>
    </div>
  );
};

export { EditingConfirmationButton };
