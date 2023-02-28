import React from "react";
import Body from './Components/Body'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default appRouter;

/* ******************************************************************************************************************* */

// this will render the react element inside the root.
//root.render(heading2) 


/* const heading1 = React.createElement('h1', {
  id: 'title'
}, 'Namaste React Everyone from parcel!'); */

/* const Header = () => (
  <div>
    we can call heading2 as below since it is a variable. Had it been a function, we can call it in two ways i.e {heading2()} or <heading2 />
    <Title />
    <h1>Hello from functional component</h1>
    <h2>from H2 tag</h2>
  </div>
); */

/* const Header = () => {
  return (
    <h1>Hello from functional component</h1>
  );
} */