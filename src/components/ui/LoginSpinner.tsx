import React from "react";

const LoadingButton = ({ children, classes, handler, disabled }: any) => {
  return (
    <button
      onClick={handler}
      disabled={disabled}
      className={`btn btn-outline rounded-full w-full hover:bg-white hover:text-black hover:shadow-lg ${classes}`}
    >
      {children}
    </button>
  );
};

export default LoadingButton;
