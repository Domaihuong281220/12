import { LandingPage, ProductsPage} from "../pages";

const routes = [
    {
      path: "/",
      exact: true,
      component: <LandingPage />,
      main: () => <LandingPage />,
    },
    {
      path: "/products/:id",
      exact: true,
      component: <ProductsPage />,
      main: () => <ProductsPage />,
    },
    {
      path: "/products",
      exact: true,
      component: <ProductsPage />,
      main: () => <ProductsPage />,
    }
  ];
  
  export default routes;