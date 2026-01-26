"use client";
import { getBlogs } from "@/actions/blog.action";
//if you want to make the page dynamic and not cached at all
// export const dynamic = 'force-dynamic';

import { useEffect, useState } from "react";

export default function AboutPage() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error ("Failed to load data")

  const [data, setData] = useState();
  const [error, setError] = useState<{ message: string } | null>(null);
  console.log(data);
  console.log(error);

  useEffect(() => {
    (async () => {
      const { data, error } = await getBlogs();
      setData(data);
      setError(error);
    })();
  }, []);

  return (
    <div>
      <h1> This is About page</h1>
    </div>
  );
}
