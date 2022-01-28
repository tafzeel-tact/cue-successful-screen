import React from "react";
import Group38711 from "../Group38711";
import "./Footer.css";

function Footer(props) {
  const { logo, group38711Props } = props;

  return (
    <div className="footer">
      <div className="content">
        <img className="logo-1" src={logo} />
        <div className="group-38710">
          <div className="join-cue">
            <div className="join-cue-1 valign-text-middle poppins-normal-pink-swan-14px">Join cue</div>
          </div>
          <div className="blog">
            <div className="blog-1 valign-text-middle poppins-normal-pink-swan-14px">Blog</div>
          </div>
          <div className="faq">
            <div className="fa-qs valign-text-middle poppins-normal-pink-swan-14px">FAQs</div>
          </div>
          <div className="terms-conditions">
            <div className="terms-conditions-1 valign-text-middle poppins-normal-pink-swan-14px">
              Terms &amp; Conditions
            </div>
          </div>
          <div className="privacy-policy">
            <div className="privacy-policy-1 valign-text-middle poppins-normal-pink-swan-14px">Privacy policy</div>
          </div>
          <div className="contact">
            <div className="place valign-text-middle poppins-normal-pink-swan-14px">Contact</div>
          </div>
        </div>
        <p className="lorem-ipsum-dolor-si poppins-normal-pink-swan-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis donec nunc commodo quis interdum. Ultricies cras
          porta risus in vel lacinia tellus ligula augue. Ullamcorper egestas in enim gravida. At amet ornare convallis
          posuere sed porta. Eu molestie malesuada aliquet mi sed sed in. Turpis morbi viverra proin elit.
        </p>
        <div className="social">
          <Group38711 fb={group38711Props.fb} twitter={group38711Props.twitter} insta={group38711Props.insta} />
          <img
            className="up-shevron"
            src="https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f139dc31e2102e5db0c9d5/img/up-shevron@2x.png"
          />
        </div>
        <img
          className="divider-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f139dc31e2102e5db0c9d5/img/divider@1x.png"
        />
        <p className="x2021-cue-all-rights-reserved valign-text-middle poppins-normal-white-16px">
          © 2021 CUE. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
