"use client";

import React from "react";

const page = ({ params }: { params: any }) => {
  const { id } = params;
  return <div>{id}</div>;
};

export default page;
