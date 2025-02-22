import { Blog } from "../type/Blog";

type Props = {
  blog: Blog;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 group hover:shadow-lg transition-all hover:scale-105 cursor-pointer ">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <div>
        <h2 className="text-xl font-semibold group-hover:text-yellow-400 transition-all">
          {blog.title}
          <p className="text-sm text-gray-400 mt-1">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          <p className="mt-2 text-base text-gray-300 line-clamp-3">
            {blog.description}
          </p>
        </h2>
      </div>
    </div>
  );
};

export default BlogCard;
