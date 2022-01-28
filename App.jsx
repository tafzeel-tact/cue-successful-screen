import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import W1A5SuccessfulCongratulations from "./components/W1A5SuccessfulCongratulations";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|w1-a5-successful-congratulations)">
          <W1A5SuccessfulCongratulations {...w1A5SuccessfulCongratulationsData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const menuData = {
    logo: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/logo-1@2x.png",
    googleplayA1B4Ed6211C913: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/googleplay-a1b4ed6211c9--1--3@2x.png",
    appstore6F955D329Ad713: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/appstore-6f955d329ad7--1--3@2x.png",
};

const property1ImageSuccessData = {
    image: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/rectangle-444@2x.png",
    image31: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/image-31@2x.png",
};

const headerData = {
    transactionSuccessful: "transaction successful",
    theCueHasBeenAdd: <>cue has been added to your calendar.<br />login app using the same number to enjoy your cue</>,
};

const iconsData = {
    iconoirFacebook: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/iconoir-facebook@2x.png",
    iconoirTwitter: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/iconoir-twitter@2x.png",
    akarIconsLinkChain: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/akar-icons-link-chain@2x.png",
};

const logIn2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/log-in--2--1@1x.png",
};

const downloadComponentData = {
    logIn2Props: logIn2Data,
};

const group38711Data = {
    fb: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f139dc31e2102e5db0c9d5/img/fb@2x.png",
    twitter: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/twitter@2x.png",
    insta: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f2949a21d6481255052506/img/insta@2x.png",
};

const footerData = {
    logo: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/logo@2x.png",
    group38711Props: group38711Data,
};

const w1A5SuccessfulCongratulationsData = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/bg-@1x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/receipt-bg@1x.png",
    title1: "Ka se Kitab 18- Balbeer Punj in conversation with Himanshu Bajpai",
    address: "08 Aug 21   l   09:30 PM",
    divider: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f139dc31e2102e5db0c9d5/img/line-34@1x.png",
    amount: "Amount",
    total: "Total",
    surname: "Price - ₹450",
    text5: "₹450",
    title2: "Share",
    shevron: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f2949a21d6481255052506/img/shevron@2x.png",
    menuProps: menuData,
    property1ImageSuccessProps: property1ImageSuccessData,
    headerProps: headerData,
    iconsProps: iconsData,
    headerProps2: downloadComponentData,
    footerProps: footerData,
};

