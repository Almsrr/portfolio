import React from "react";
import classNames from "classnames";

export default function ThemeSwitchButton({
  onClick,
  darkThemeIsActive,
  size = "md",
}) {
  const btnClassName = classNames("theme-switch-btn", size, {
    "active": darkThemeIsActive,
  });

  return (
    <button
      type="button"
      className={btnClassName}
      onClick={onClick}
      title="Theme"
    >
      <i className="bx bx-sun sun" />
      <i className="bx bx-moon moon" />
    </button>
  );
}
