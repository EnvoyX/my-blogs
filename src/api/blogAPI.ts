import { Blog } from "../type/Blog";

const BASE_URL = "http://localhost:5000";

// Fetch all blog
export const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await fetch(`${BASE_URL}/blogs`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch resource");
    }
    return await response.json();
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message || "Failed to fetch Blogs");
  }
};
