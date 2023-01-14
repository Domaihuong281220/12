import { Routes, Route } from "react-router-dom";
import PublicLayout from "../PublicLayout/PublicLayout";
import PrivateLayout from "../PrivateLayout/PrivateLayout";
import PublicRoutes from "../../routes/PublicRoute";
import PrivateRoutes from "../../routes/PrivateRoute";
import { withTranslation, useTranslation } from "react-i18next";

function DefalutLayout(props) {
  const { t } = props;
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  //Routes
  const showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={route.main()}
            exact={route.exact}
          ></Route>
        );
      });
    }
    return result;
  };

  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          {showContentMenu(PublicRoutes)}
        </Route>

        <Route element={<PrivateLayout />}>
          {showContentMenu(PrivateRoutes)}
        </Route>
      </Routes>
    </>
  );
}

export default withTranslation()(DefalutLayout);
