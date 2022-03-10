import React, { SyntheticEvent } from "react";
import cx from "classnames";
import styles from "./databaseAlert.module.scss";
import { Themes } from "../types";
import { Button } from "../button";

interface Props {
  className?: string;
  onClick?(e: any): void;
  type: string;
  headerText?: string;
  contentText?: string;
}

const DatabaseAlert: React.FC<Props> = ({
  className,
  onClick,
  type,
  headerText,
  contentText,
}) => {
  const [hideDatabaseAlert, setHideDatabaseAlert] = React.useState(true);
  const closeDatatbaseAlert = () => {
    setHideDatabaseAlert(false);
  };
  return (
    <div className={className}>
      <div
        className={
          hideDatabaseAlert === false
            ? styles.hiddenDatabaseAlert
            : cx(styles.databaseAlert)
        }
      >
        <div className={styles.header}>
          {headerText !== undefined
            ? headerText
            : type === "delete"
            ? "Deleting the entry"
            : type === "update"
            ? "Saving changes"
            : type === "create"
            ? "Adding the entry"
            : null}
        </div>
        <div className={styles.content}>
          <div className={styles.contentText}>
            {contentText !== undefined
              ? contentText
              : type === "delete"
              ? "Are you sure you want to delete this entry?"
              : type === "update"
              ? "Save your changes?"
              : type === "create"
              ? "Do you want to add this entry?"
              : null}
          </div>
          <div className={styles.buttons}>
            <Button
              theme={Themes.cancel}
              onClick={(e) => (onClick ? onClick(e) : null)}
              name={"cancel"}
            />
            {type === "delete" ? (
              <Button theme={Themes.delete} name={"delete"} onClick={onClick} />
            ) : type === "update" ? (
              <Button theme={Themes.update} name={"update"} onClick={onClick} />
            ) : type === "create" ? (
              <Button theme={Themes.create} name={"create"} onClick={onClick} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export { DatabaseAlert };
