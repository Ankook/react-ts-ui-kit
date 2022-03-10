import React from "react";
import cx from "classnames";
import styles from "./status.module.scss";

interface Props {
  className?: string;
  status: "Work" | "Wait" | "Complete" | "Init";
  text?: string;
}

const Status: React.FC<Props> = ({ className, status, text }) => {
  return (
    <div
      className={cx(
        styles.status,
        status === "Work"
          ? styles.working
          : status === "Init"
          ? styles.notWorking
          : status === "Wait"
          ? styles.waiting
          : status === "Complete"
          ? styles.ended
          : null,
        className
      )}
    >
      {text !== undefined
        ? text
        : status === "Work"
        ? "Working"
        : status === "Init"
        ? "Initialization"
        : status === "Wait"
        ? "Waiting"
        : status === "Complete"
        ? "Complete"
        : null}
    </div>
  );
};

export { Status };
