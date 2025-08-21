import { Link } from "react-router-dom";

const Category = () => {
  const cat = [
    {
      name: "React",
      to: "cat/react",
      bg: "bg-blue-200",
    },
    {
      name: "NextJs",
      to: "cat/nextjs",
      bg: "bg-red-200",
    },
    {
      name: "JavaScript",
      to: "cat/javascript",
      bg: "bg-yellow-200",
    },
    {
      name: "MongoDB",
      to: "cat/mongodb",
      bg: "bg-green-200",
    },
  ];

  return (
    <div className="mt-10 mb-20">
        <h1 className="text-xl font-bold my-4">Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-start items-center gap-8">
        {cat.map((item, index) => {
          return (
              <Link key={index} to={item.to} className={`${item.bg} px-6 py-2 rounded-md  me-4 text-xl`}>{item.name}</Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
