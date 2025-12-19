import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const demoBlogs = [
  {
    _id: "1",
    title: "Why I Chose the MERN Stack",
    description:
      "MERN feels like home—MongoDB for freedom, Express for control, React for beauty, Node for power. This stack lets ideas breathe.",
    image: "https://source.unsplash.com/600x400/?code,developer",
  },
  {
    _id: "2",
    title: "React Hooks Changed Everything",
    description:
      "From useState to useEffect, hooks turned messy class components into calm, readable poetry.",
    image: "https://source.unsplash.com/600x400/?react,javascript",
  },
  {
    _id: "3",
    title: "Frontend vs Backend: My Honest Take",
    description:
      "Frontend is art, backend is logic. One sings to users, the other whispers to databases.",
    image: "https://source.unsplash.com/600x400/?web,programming",
  },
  {
    _id: "4",
    title: "Mistakes I Made as a Junior Developer",
    description:
      "Chasing frameworks instead of fundamentals—learn the roots before growing branches.",
    image: "https://source.unsplash.com/600x400/?laptop,coding",
  },
  {
    _id: "5",
    title: "How Projects Teach More Than Tutorials",
    description:
      "Tutorials show the road, projects make you walk it—barefoot, sometimes bleeding, always learning.",
    image: "https://source.unsplash.com/600x400/?developer,workspace",
  },
];

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // shuffle blogs randomly on load
    const shuffled = [...demoBlogs].sort(() => Math.random() - 0.5);
    setBlogs(shuffled);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Words from My Code Journey
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <motion.div
            key={blog._id}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {blog.description.length > 110
                  ? blog.description.slice(0, 110) + "..."
                  : blog.description}
              </p>

              <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
