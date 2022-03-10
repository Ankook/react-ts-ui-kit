import React from "react";
import cx from "classnames";
import styles from "./button.module.scss";
import { Themes } from "../types";

interface Props {
  theme: Themes;
  text?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: any) => void;
  name?: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  onClick,
  theme,
  className,
  name,
}: Props) => {
  const getTheme = () => {
    if (theme === Themes.red) {
      return styles.redTheme;
    }
    if (theme === Themes.blue) {
      return styles.blueTheme;
    }
    if (theme === Themes.white) {
      return styles.whiteTheme;
    }
    if (theme === Themes.delete) {
      return styles.delete;
    }
    if (theme === Themes.update) {
      return styles.update;
    }
    if (theme === Themes.create) {
      return styles.create;
    }
    if (theme === Themes.cancel) {
      return styles.cancel;
    }
    return;
  };

  return (
    <button
      className={cx(styles.customButton, getTheme(), className)}
      onClick={onClick}
      name={name}
    >
      {text !== undefined
        ? text
        : theme === Themes.create
        ? "Create"
        : theme === Themes.update
        ? "Update"
        : theme === Themes.delete
        ? "Delete"
        : theme === Themes.cancel
        ? "Cancel"
        : "Button"}
    </button>
  );
};

export { Button };
