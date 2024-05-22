import { redirect } from "next/navigation";
import React from "react";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const page = ({ searchParams }: PageProps) => {
  const query = searchParams.query;

  if (Array.isArray(query) || !query) return redirect("/");

  // Querying logic

  return <div>page</div>;
};

export default page;
