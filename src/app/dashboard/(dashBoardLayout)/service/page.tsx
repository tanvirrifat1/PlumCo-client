import Link from "next/link";
import React from "react";

const ServicePage = () => {
  return (
    <div>
      <h1>this page</h1>
      <Link href={"/dashBoard/service/create"}>
        <button>btn</button>
      </Link>
    </div>
  );
};

export default ServicePage;
