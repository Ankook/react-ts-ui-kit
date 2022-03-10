import React  from "react";
import cx from "classnames";
import styles from "./moreVerticalButton.module.scss";
import { ReactComponent as MoreVerticalDots } from "../../../assets/moreVerticalDots.svg";

interface Props {
  className?: string;
  handleClick?(data: boolean): void;
}

const MoreVerticalButton: React.FC<Props> = ({ className, handleClick }) => {
  return (
    <button
      className={cx(styles.moreVerticalButton, className)}
      onClick={() => (handleClick ? handleClick(true) : null)}
    >
      <MoreVerticalDots className={styles.moreVerticalButtonSvg} />
    </button>
  );
};

export { MoreVerticalButton };
