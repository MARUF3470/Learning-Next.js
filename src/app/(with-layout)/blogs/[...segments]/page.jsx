import React from "react";

const page = ({ params }) => {
  console.log(params.segments);
  const [year, id] = params.segments;
  return (
    <div>
      single blog {year} {id}
    </div>
  );
};

export default page;
