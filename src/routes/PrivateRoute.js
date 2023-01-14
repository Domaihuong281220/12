import { UserPage, DashboardPage, DayCarePage } from "../pages";

const routes = [
    {
      path: "/user",
      exact: true,
      component: <UserPage />,
      main: () => <UserPage />,
    },
    {
      path: "/dashboard",
      exact: true,
      component: <DashboardPage />,
      main: () => <DashboardPage />,
    },
    {
      path: "/daycare",
      exact: true,
      component: <DayCarePage />,
      main: () => <DayCarePage />,
    },
  ];
  
  export default routes;