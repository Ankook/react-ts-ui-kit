import React from "react";
import cx from "classnames";
import styles from "./pauseButton.module.scss";
import { ReactComponent as PauseCircle } from "../../../assets/button-pause-circle.svg";

interface Props {
  status: "Work" | "Wait" | "Complete" | "Init";
  className?: string;
  onClick?: ((e: React.SyntheticEvent) => void) | (() => void);
}

const PauseButton: React.FC<Props> = ({ status, className, onClick }) => {
  return (
    <div
      className={
        status === "Work" || status === "Wait"
          ? cx(styles.pauseButton, styles.isRowSelected)
          : cx(styles.pauseButton, className)
      }
    >
      <PauseCircle className={cx(styles.circleInPauseButton, className)} />
    </div>
  );
};

export { PauseButton };
