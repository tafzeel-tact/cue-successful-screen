import React from "react";
import LogIn2 from "../LogIn2";
import "./DownloadComponent.css";

function DownloadComponent(props) {
  const { logIn2Props } = props;

  return (
    <div className="download-component">
      <div className="overlap-group2">
        <img
          className="rectangle-446"
          src="https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/rectangle-446@1x.png"
        />
        <LogIn2 src={logIn2Props.src} />
        <div className="text">
          <h1 className="download-cue-app-ho poppins-normal-white-32px">
            download cue app!
            <br />
            home to interesting conversations with creators and communities
          </h1>
          <div className="your-bookings-will-b poppins-normal-white-18px">
            Pass will be avaiable on cue app. Login app using the same number and find cue under calendar. happy cueing!
          </div>
        </div>
        <img
          className="googleplaya1b4ed6211c9-1-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/googleplay-a1b4ed6211c9--1--2@2x.png"
        />
        <img
          className="appstore6f955d329ad7-1-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/appstore-6f955d329ad7--1--2@2x.png"
        />
      </div>
    </div>
  );
}

export default DownloadComponent;
