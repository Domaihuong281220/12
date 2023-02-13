import { LandingPage, ProductsPage,Configurator3D} from "../pages";

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
    },
    {
      path: "/configurator",
      exact: true,
      component: <Configurator3D />,
      main: () => <Configurator3D />,
    }
  ];
  
  export default routes;