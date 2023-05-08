import React from "react";
import classNames from "classnames";

export default function BurgerButton({ onClick, menuIsVisible = false }) {
  const btnClasses = classNames("burger-btn", { "active": menuIsVisible });

  return (
    <button className={btnClasses} onClick={onClick} aria-label="burger-btn" />
  );
}
