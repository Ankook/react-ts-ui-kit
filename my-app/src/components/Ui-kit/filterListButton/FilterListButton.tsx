import React from "react";
import cx from "classnames";
import styles from "./filterListButton.module.scss";
import { ReactComponent as FilterButton } from "../../../assets/filterButton.svg";

interface Props {
  className?: string;
  handleClick?(data: boolean): void;
}

const FilterListButton: React.FC<Props> = ({ className, handleClick }) => {
  return (
    <button
      className={cx(styles.filterListButton, className)}
      onClick={() => (handleClick ? handleClick(true) : null)}
    >
      <FilterButton className={styles.filterButton} />
    </button>
  );
};

export { FilterListButton };
