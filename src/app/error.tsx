"use client";

import Image from "next/image";
import React from "react";

const error = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "red",
        }}
      >
        <h1>Something went wrong!</h1>
      </div>
    </div>
  );
};

export default error;
