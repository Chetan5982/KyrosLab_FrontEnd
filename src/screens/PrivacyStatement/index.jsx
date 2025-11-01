"use client";
import React from "react";
import { MainSection } from "./styled";

const PrivacyStatement = () => {
  return (
    <MainSection>
      <div className="container">
        <h1 className="headeing">Privacy Policy </h1>
        <div className="discription">
          Bhanderi Lab Grown Diamond built the Bhanderi Lab Grown Diamonds app
          as a Free app. This SERVICE is provided by Bhanderi Lab Grown Diamond
          at no cost and is intended for use as is. This page is used to inform
          visitors regarding my policies with the collection, use, and
          disclosure of Personal Information if anyone decided to use my
          Service. If you choose to use our Service, then you agree to the
          collection and use of information in relation to this policy. The
          Personal Information that we collect is used for providing and
          improving the Service.
          <br /> We will not use or share your information with anyone except as
          described in this Privacy Policy. <br /> The terms used in this
          Privacy Policy have the same meanings as in our Terms and Conditions,
          which is accessible at Bhanderi Lab Grown Diamonds unless otherwise
          defined in this Privacy Policy.
        </div>
        <h2 className="headeing"> Information Collection and Use</h2>
        <div className="discription">
          {" "}
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information. The
          information that we request will be retained on your device and is not
          collected by me in any way. The app does use third party services that
          may collect information used to identify you. Link to privacy policy
          of third party service providers used by the app
          <b>
            <div>
              <a
                href="https://www.google.com/policies/privacy/"
                className="text-[#024638] font-semibold"
                // style={{ color: "#000", textDecoration: "none" }}
              >
                Google Play Services
              </a>
            </div>
          </b>
          <b>
            <div>
              <a
                href="https://firebase.google.com/policies/analytics"
                className="text-[#024638] font-semibold"
                // style={{ color: "#000", textDecoration: "none" }}
              >
                Google Analytics for Firebase
              </a>
            </div>
          </b>
        </div>
        <h3 className="headeing">Log Data</h3>
        <div className="discription">
          We want to inform you that whenever you use my Service, in a case of
          an error in the app we collect data and information (through third
          party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing my Service, the time and date of your use of
          the Service, and other statistics.
        </div>
        <p className="headeing">Cookies</p>
        <div className="discription">
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device’s internal
          memory.
          <br />
          This Service does not use these “cookies” explicitly. However, the app
          may use third party code and libraries that use “cookies” to collect
          information and improve their services. You have the option to either
          accept or refuse these cookies and know when a cookie is being sent to
          your device. If you choose to refuse our cookies, you may not be able
          to use some portions of this Service.
        </div>

        <p className="headeing">Service Providers </p>
        <div className="discription">
          We may employ third-party companies and individuals due to the
          following reasons:
          <br />
          To facilitate our Service;
          <br /> To provide the Service on our behalf;
          <br /> To perform Service-related services;
          <br /> or To assist us in analyzing how our Service is used. We want
          to inform users of this Service that these third parties have access
          to your Personal Information. The reason is to perform the tasks
          assigned to them on our behalf. However, they are obligated not to
          disclose or use the information for any other purpose.
        </div>
        <p className="headeing">Security</p>
        <div className="discription">
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </div>
        <p className="headeing">Links to Other Sites </p>
        <div className="discription">
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by me. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. we have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </div>
        <p className="headeing">Children’s Privacy</p>
        <div className="discription">
          {" "}
          These Services do not address anyone under the age of 13. we do not
          knowingly collect personally identifiable information from children
          under 13 years of age. In the case we discover that a child under 13
          has provided us with personal information, we immediately delete this
          from our servers. If you are a parent or guardian and you are aware
          that your child has provided us with personal information, please
          contact us so that we will be able to do necessary actions.
        </div>
        <p className="headeing">Changes to This Privacy Policy </p>
        <div className="discription">
          {" "}
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page. This policy is effective as of 2023-07-17
        </div>
        <p className="headeing">Contact Us </p>
        <div className="discription">
          {" "}
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact me at{" "}
          <a
            href="mailto:info@blgdlab.com"
            className="text-[#024638] font-semibold"
          >
            info@blgdlab.com
          </a>
          .
        </div>

        <p className="headeing">For Grievance Related Queries:</p>
        <p>Grievance officer: Dr. Snehal Patel</p>
        <p>Email id: ceo@blgdlab.com</p>
        <p>Contact no: +91 98251 31234</p>
      </div>
    </MainSection>
  );
};

export default PrivacyStatement;
