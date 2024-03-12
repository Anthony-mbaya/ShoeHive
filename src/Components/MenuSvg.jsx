import React from "react";

export default function Menubar() {
  return (
    <>
      <button className="sm:hidden focus:outline-none mx-4">
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </button>
    </>
  );
}
