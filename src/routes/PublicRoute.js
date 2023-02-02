import { LandingPage, ProductsPage} from "../pages";

const routes = [
    {
      path: "/",
      exact: true,
      component: <LandingPage />,
      main: () => <LandingPage />,
    },
    {
      path: "/products",
      exact: true,
      component: <ProductsPage />,
      main: () => <ProductsPage />,
    }
  ];
  
  export default routes;