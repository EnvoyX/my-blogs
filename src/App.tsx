import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogCreateEdit from "./pages/BlogCreateEdit";
import BlogDetail from "./pages/BlogDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogList></BlogList>,
  },
  {
    path: "/create",
    element: <BlogCreateEdit mode="create"></BlogCreateEdit>,
  },
  {
    path: "/blog/:id",
    element: <BlogDetail></BlogDetail>,
  },
  {
    path: "/blog/:id/edit",
    element: <BlogCreateEdit mode="edit"></BlogCreateEdit>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
