import React from "react";
import cx from "classnames";
import styles from "./modalClosingButton.module.scss";
import { ReactComponent as ModalCross } from "../../../assets/modalClosingSvg.svg";

interface Props {
  className?: string;
  onClick?: () => void;
}

const ModalClosingButton: React.FC<Props> = ({ className, onClick }) => {
  return (
    <div className={cx(styles.customButton, className)} onClick={onClick}>
      <ModalCross className={styles.modalCross} />
    </div>
  );
};

export { ModalClosingButton };
