import "./styles.css";
import { withTranslation } from "react-i18next";
import { Collection, Feature, PricingTable, AboutUs } from "../../components";
import { productData, productDataTwo } from "../../assets/DummyData/data";
import promoteVid from "../../assets/Videos/LandingPageHeader.mp4";

function LandingPage(props) {
  const { t } = props;

  return (
    <>
      <AboutUs />
      <PricingTable data={productData} />
      {/* <Feature videoUrl={promoteVid} type="video/mp4" /> */}
      <Collection data={productDataTwo} heading={t("landingpage.collection")} />
    </>
  );
}

export default withTranslation()(LandingPage);
