import React from "react";
import cx from "classnames";
import styles from "./playButton.module.scss";
import { ReactComponent as PlayCircle } from "../../../assets/button-play-circle.svg";

interface Props {
  status: "Work" | "Wait" | "Complete" | "Init";
  className?: string;
  onClick?: ((e: React.SyntheticEvent) => void) | (() => void);
}

const PlayButton: React.FC<Props> = ({ status, className, onClick }) => {
  return (
    <div
      className={
        status === "Init"
          ? cx(styles.playButton, styles.isRowSelected)
          : cx(styles.playButton, className)
      }
    >
      <PlayCircle className={cx(styles.circleInPlayButton)} />
    </div>
  );
};

export { PlayButton };
