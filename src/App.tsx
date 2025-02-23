import React from 'react';
// import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const BlogList = React.lazy(() => import('./pages/BlogList'));
const BlogCreateEdit = React.lazy(() => import('./pages/BlogCreateEdit'));
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'));
// const BlogListSkeleton = React.lazy(
//   () => import('./components/BlogListSkeleton')
// );
// const BlogDetailSkeleton = React.lazy(
//   () => import('./components/BlogDetailSkeleton')
// );
import { ToastContainer } from 'react-toastify';
const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogList></BlogList>,
  },
  {
    path: '/create',
    element: <BlogCreateEdit mode="create"></BlogCreateEdit>,
  },
  {
    path: '/blog/:id',
    element: <BlogDetail></BlogDetail>,
  },
  {
    path: '/blog/:id/edit',
    element: <BlogCreateEdit mode="edit"></BlogCreateEdit>,
  },
]);
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <Suspense fallback={<BlogListSkeleton></BlogListSkeleton>}>
//         <BlogList></BlogList>
//       </Suspense>
//     ),
//   },
//   {
//     path: '/create',
//     element: (
//       <Suspense
//         fallback={
//           <h1 className="text-center text-3xl font-bold text-amber-300">
//             Loading...
//           </h1>
//         }
//       >
//         <BlogCreateEdit mode="create"></BlogCreateEdit>
//       </Suspense>
//     ),
//   },
//   {
//     path: '/blog/:id',
//     element: (
//       <Suspense fallback={<BlogDetailSkeleton></BlogDetailSkeleton>}>
//         <BlogDetail></BlogDetail>
//       </Suspense>
//     ),
//   },
//   {
//     path: '/blog/:id/edit',
//     element: (
//       <Suspense
//         fallback={
//           <h1 className="text-center text-3xl font-bold text-amber-300">
//             Loading...
//           </h1>
//         }
//       >
//         <BlogCreateEdit mode="create"></BlogCreateEdit>
//       </Suspense>
//     ),
//   },
// ]);

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
