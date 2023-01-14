import React from "react";
import "./styles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { withTranslation } from "react-i18next";

function Footer(props) {
  const { t } = props;

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-location">
            <FaHome size={20} className="footer-icons" />
            <div>
              <p>{t("footer.address")}</p>
              <p>{t("footer.VietNam")}</p>
            </div>
          </div>
          <div className="footer-phone">
            <h4>
              <FaPhone size={20} className="footer-icons" />
              0965180127
            </h4>
          </div>
          <div className="footer-email">
            <h4>
              <FaMailBulk size={20} className="footer-icons" />
              liemld@1cinnovation.com
            </h4>
          </div>
        </div>
        <div className="footer-right">
          <h4>{t("footer.aboutTheCompany")}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            quos corporis numquam itaque neque nobis commodi aperiam possimus
            similique veritatis distinctio, ex sint ab, odit assumenda
            consequuntur voluptatum illo est.
          </p>
          <div className="footer-social">
            <FaFacebook size={20} className="footer-icons" />
            <FaLinkedin size={20} className="footer-icons" />
            <FaTwitter size={20} className="footer-icons" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Footer);
