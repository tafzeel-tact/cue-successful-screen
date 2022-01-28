import React from "react";
import Menu from "../Menu";
import Property1ImageSuccess from "../Property1ImageSuccess";
import Header from "../Header";
import Icons from "../Icons";
import DownloadComponent from "../DownloadComponent";
import Footer from "../Footer";
import "./W1A5SuccessfulCongratulations.css";

function W1A5SuccessfulCongratulations(props) {
  const {
    overlapGroup,
    overlapGroup1,
    title1,
    address,
    divider,
    amount,
    total,
    surname,
    text5,
    title2,
    shevron,
    menuProps,
    property1ImageSuccessProps,
    headerProps,
    iconsProps,
    headerProps2,
    footerProps,
  } = props;

  return (
    <div className="w1-a5-successful-congratulations screen">
      <Menu
        logo={menuProps.logo}
        googleplayA1B4Ed6211C913={menuProps.googleplayA1B4Ed6211C913}
        appstore6F955D329Ad713={menuProps.appstore6F955D329Ad713}
      />
      <div className="transaction-card">
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <Property1ImageSuccess
            image={property1ImageSuccessProps.image}
            image31={property1ImageSuccessProps.image31}
          />
          <Header
            transactionSuccessful={headerProps.transactionSuccessful}
            theCueHasBeenAdd={headerProps.theCueHasBeenAdd}
          />
          <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <div className="card-information">
              <div className="title poppins-normal-eerie-black-24px">{title1}</div>
              <div className="time-tag">
                <p className="address valign-text-middle poppins-normal-white-16px">{address}</p>
              </div>
            </div>
            <img className="divider" src={divider} />
            <div className="price-information">
              <div className="heading poppins-normal-eerie-black-18px">
                <div className="amount valign-text-middle">{amount}</div>
                <div className="total valign-text-middle">{total}</div>
              </div>
              <div className="price poppins-normal-eerie-black-22px">
                <div className="surname valign-text-middle">{surname}</div>
                <div className="text-1 valign-text-middle">{text5}</div>
              </div>
            </div>
          </div>
          <div className="share">
            <div className="title-1 valign-text-middle poppins-normal-eerie-black-16px">{title2}</div>
            <Icons
              iconoirFacebook={iconsProps.iconoirFacebook}
              iconoirTwitter={iconsProps.iconoirTwitter}
              akarIconsLinkChain={iconsProps.akarIconsLinkChain}
            />
          </div>
        </div>
      </div>
      <img className="shevron" src={shevron} />
      <DownloadComponent logIn2Props={headerProps2.logIn2Props} />
      <Footer logo={footerProps.logo} group38711Props={footerProps.group38711Props} />
    </div>
  );
}

export default W1A5SuccessfulCongratulations;
