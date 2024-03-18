import {
  TextContainerTitle,
  BottomBanner,
  TextContainerBody2,
} from "./PageComponent";

export default function Packages() {
  function ScrollIntoView() {
    const idsArr = {
      "#silver": "silver",
      "#gold": "gold",
      "#diamond": "diamond",
    };

    let hash = window.location.hash;

    let elementId = idsArr[hash];
    if (elementId) {
      let element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  window.onload = ScrollIntoView;

  const pakagesArr = [
    [
      "silver",
      "Assessment",
      <span>
        <span style={{ color: "rgb(152, 152, 152)" }}>Silver</span> Package
      </span>,
      "Security Audit",
      "Unlock peace of mind with our Security Audits package. Our expert ethical hackers will conduct a comprehensive review of your organization's security policies, procedures, and controls. Identify vulnerabilities and strengthen your defenses to safeguard against cyber threats. Ensure your digital assets are protected with ChiperHub's Silver package.",
      {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      "rgba(152, 152, 152, 0.3)",
    ],

    [
      "gold",
      "Hacking",
      <span>
        <span style={{ color: "rgb(255, 223, 0)" }}>Gold</span> Package
      </span>,
      "Penetration Testing + Vulnerability Assessment",
      "Ready to take your cybersecurity to the next level? Dive deep into your systems and networks with ourGold package. Our skilled team will simulate real-world cyber attacks to uncover weaknesses and vulnerabilities. Receive actionable insights and recommendations to fortify your defenses and protect against potential threats.",
      {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      "rgba(255, 223, 0, 0.3)",
    ],

    [
      "diamond",
      "Diamond",
      <span>
        <span style={{ color: "rgb(150, 200, 255)" }}>Diamond</span> Package
      </span>,
      "Complete Security Suit",
      "Experience ultimate protection with our Diamond package. Combining Penetration Testing, Vulnerability Assessment, Social Engineering Testing, and Security Audits, this comprehensive offering leaves no stone unturned. Detect and mitigate vulnerabilities, address human factor risks, and ensure regulatory compliance. Safeguard your organization's digital assets with ChiperHub's Diamond package.",
      {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      "rgba(185, 242, 255, 0.5)",
    ],
  ];

  function displayContent(Arr) {
    return Arr.map(
      ([id, img, title, subtitle, description, textStyle, color]) => (
        <TextContainerBody2
          key={id}
          id={id}
          img={img}
          title={title}
          subtitle={subtitle}
          description={description}
          textStyle={textStyle}
          color={color}
        />
      )
    );
  }

  return (
    <div className="container-fluid p-0 m-0">
      <TextContainerTitle
        text="Packages"
        img="Packages"
        textStyle={{ top: "20%", left: "10%", color: "black" }}
      />
      {displayContent(pakagesArr)}
      <BottomBanner
        title="Ready to Secure Your Future?"
        description="We're thrilled to sit down, grab a virtual coffee, and dive into how
        we can secure your digital kingdom. Don't be shy—drop us a line!"
        href="/contact"
        link="Contact Us!"
      />
    </div>
  );
}
