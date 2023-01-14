import { LandingPage } from "../pages";

const routes = [
    {
      path: "/",
      exact: true,
      component: <LandingPage />,
      main: () => <LandingPage />,
    },
  ];
  
  export default routes;