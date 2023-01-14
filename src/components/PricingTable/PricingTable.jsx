import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { Button } from "../index";
import "./styles.css";

function PricingTable(props) {
  const { data, t } = props;

  return (
    <div className="pricing">
      <div className="pricing-card_container">
        {data.map((item, index) => {
          return (
            <div className="pricing-card">
              <h3>{t(item.title)}</h3>
              <span className="bar"></span>
              <p className="btc">{item.price}</p>
              {item.service.map((elements, _index) => {
                return <p>{t(elements)}</p>;
              })}
              <NavLink to="/test">
                <Button btnName={t("bookingNow")} />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withTranslation()(PricingTable);
