import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Blogs | Learning NextJs",
  description: "Learning NextJs",
};
const blogs = [
  {
    id: 1,
    title: "title1",
    year: 2001,
  },
  {
    id: 2,
    title: "title2",
    year: 2002,
  },
  {
    id: 3,
    title: "title3",
    year: 2003,
  },
  {
    id: 3,
    title: "title3",
    year: 2003,
  },
];
const BlogsPage = () => {
  return (
    <div className="flex gap-3 my-4">
      {/* {blogs.map(({ id, title, year }) => (
        <Link className="border p-2" href={`/blogs/${year}/${id}`} key={id}>
          {title}
        </Link>
      ))} */}
      {blogs.map(({ id, title, year }) => (
        <Link
          className="border p-2"
          href={{ pathname: `/blogs/${year}/${id}`, query: { title: title } }}
          key={id}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
