import React from "react";
import cx from "classnames";
import styles from "./filterClosingButton.module.scss";
import { ReactComponent as ModalCross } from "../../../assets/modalClosingSvg.svg";

interface Props {
  className?: string;
  onClick?: () => void;
}

const FilterClosingButton: React.FC<Props> = ({ className, onClick }) => {
  return (
    <div className={cx(styles.customButton, className)} onClick={onClick}>
      <ModalCross className={styles.filterModalCross} />
    </div>
  );
};

export { FilterClosingButton };
