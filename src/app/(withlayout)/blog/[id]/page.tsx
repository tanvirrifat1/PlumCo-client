"use client";
import { useGetSingleBlogsQuery } from "@/redux/api/blogApi";
import React from "react";

const DetailsBlog = ({ params }: { params: any }) => {
  const { id } = params;
  const { data, isLoading } = useGetSingleBlogsQuery(id);
  console.log(data);
  return <div>{id}</div>;
};

export default DetailsBlog;
