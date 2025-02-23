import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogCreateEdit from "./pages/BlogCreateEdit";
import BlogDetail from "./pages/BlogDetail";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
