import "./styles.css";
import { withTranslation } from "react-i18next";
import { Button } from "../index";

function Collection(props) {
  const { heading, data, t } = props;

  return (
    <div className="collection">
      <h1 className="collection-heading">{heading}</h1>
      <div className="collection-wrapper">
        {data.map((product, index) => {
          return (
            <div className="collection-card" key={index}>
              <img
                className="collection-img"
                src={product.img}
                alt={product.alt}
              />
              <div className="collection-info">
                <h1 className="collection-title">{product.name}</h1>
                <p className="collection-desc">{product.desc}</p>
                <p className="collection-price">{product.price}</p>
                <Button btnName={t(product.button)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withTranslation()(Collection);
