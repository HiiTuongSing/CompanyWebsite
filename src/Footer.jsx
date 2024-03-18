import { FooterTitle, FooterContent } from "./PageComponent";

export default function Footer() {
  const iconArr = [
    <i className="fa-brands fa-linkedin-in"></i>,
    <i className="fa-brands fa-instagram"></i>,
    <i className="fa-brands fa-facebook-f"></i>,
    <i className="fa-brands fa-twitter"></i>,
    <i className="fa-brands fa-youtube"></i>,
  ];

  function displayIcon(arr) {
    return arr.map((link, index) => (
      <a
        key={index}
        className="nav-link"
        href="#"
        style={{ display: "inline" }}
      >
        {link}
      </a>
    ));
  }

  const contactDetailArr = [
    <p>Unit 123, Amazing Tower, Florida</p>,
    <p>
      Tel:{" "}
      <a className="footer-link" href="tel:08-12345678">
        08-12345678
      </a>
    </p>,
    <p>
      Email:{" "}
      <a className="footer-link" href="mailto:ChiperHub@xmail.com">
        ChiperHub@xmail.com
      </a>
    </p>,
    <div className="navbar navbar-collapse">
      <ul className="navbar-nav" style={{ width: "30%" }}>
        <li className="nav-item d-flex justify-content-between pt-xs-5">
          {displayIcon(iconArr)}
        </li>
      </ul>
    </div>,
  ];

  function listFooterContent(arr) {
    return arr.map((detail, index) => (
      <FooterContent key={index} content={detail} />
    ));
  }

  const servicesArr = [
    <p>
      <a className="footer-link" href="/services#penentration-testing">
        Penentration Testing
      </a>
    </p>,
    <p>
      <a className="footer-link" href="/services#vulnerability-assessment">
        Vulnerability Assessment
      </a>
    </p>,
    <p>
      <a className="footer-link" href="/services#social-engineering-testing">
        Social Engineering Testing
      </a>
    </p>,
    <p>
      <a className="footer-link" href="/services#security-audit">
        Security Audit
      </a>
    </p>,
  ];

  const packagesArr = [
    <p>
      <a
        className="footer-link"
        href="/packages#silver"
        style={{ color: "rgb(152, 152, 152)" }}
      >
        Silver
      </a>
    </p>,
    <p>
      <a
        className="footer-link"
        href="/packages#gold"
        style={{ color: "rgb(255, 223, 0)" }}
      >
        Gold
      </a>
    </p>,
    <p>
      <a
        className="footer-link"
        href="/packages#diamond"
        style={{ color: "rgb(150, 200, 255)" }}
      >
        Diamond
      </a>
    </p>,
  ];

  const footerArr = [
    "© Copyright 2022 ChiperHub Sdn Bhd, all rights reserved.",
    "Powered By Electricity",
  ];

  return (
    <>
      <div id="footer" className="row m-auto my-5 ps-lg-5">
        <FooterTitle
          title="Contact Detail"
          className="col-lg-6 col-sm-12 p-0 m-0 ps-lg-3  ps-3"
          content={listFooterContent(contactDetailArr)}
        />

        <FooterTitle className="col-lg-2 col-sm-12 pb-5" />

        <FooterTitle
          title="Services"
          className="col-lg-2 col-sm-12 pb-5 p-0 m-0  ps-3"
          content={listFooterContent(servicesArr)}
        />

        <FooterTitle
          title="Packages"
          className="col-lg-2 col-sm-12 pb-5 p-0 m-0 ps-lg-3  ps-3"
          content={listFooterContent(packagesArr)}
        />

        <FooterTitle
          className="col-12 text-center text-secondary p-0 m-0"
          content={listFooterContent(footerArr)}
        />
      </div>
    </>
  );
}
