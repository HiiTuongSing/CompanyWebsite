import {
  TextContainerTitle,
  TextContainerBody2,
  BottomBanner,
} from "./PageComponent";

export default function Services() {
  function ScrollIntoView() {
    const idsArr = {
      "#penentration-testing": "penentration-testing",
      "#vulnerability-assessment": "vulnerability-assessment",
      "#social-engineering-testing": "social-engineering-testing",
      "#security-audit": "security-audit",
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

  const servicesArr = [
    [
      "penentration-testing",
      "Penentration",
      "Penetration Testing",
      "Embark on a journey to uncover hidden vulnerabilities within your systems and networks with our Penetration Testing service. Our seasoned ethical hackers simulate real-world cyber attacks to identify weaknesses that could compromise your organization's security. Gain actionable insights and recommendations to fortify your defenses and stay one step ahead of potential threats.",
      {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    ],

    [
      "vulnerability-assessment",
      "Vulnerable",
      "Vulnerability Assessment",
      "Take proactive steps to enhance your cybersecurity posture with our Vulnerability Assessment service. Our experts employ advanced tools and techniques to systematically scan and analyze your systems, applications, and networks for potential vulnerabilities. Receive comprehensive reports and recommendations to patch weaknesses and strengthen your defenses against cyber threats.",
      {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    ],

    [
      "social-engineering-testing",
      "Social",
      "Social Engineering Testing",
      "Explore the human element of security with our Social Engineering Testing service. Our skilled professionals simulate various tactics, such as phishing and pretexting, to assess your employees' susceptibility to social engineering attacks. Identify weaknesses in your organization's security awareness and training programs and empower your team to recognize and mitigate social engineering threats.",
      {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    ],

    [
      "security-audit",
      "Security",
      "Security Audit",
      "Ensure regulatory compliance and bolster your security defenses with our Security Audits service. Our meticulous assessment examines your organization's security policies, procedures, and controls to identify gaps and weaknesses. Receive detailed reports and recommendations to enhance your security posture and protect your valuable digital assets from potential cyber threats.",
      {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    ],
  ];

  function displayContent(Arr) {
    return Arr.map(([id, img, title, description, textStyle]) => (
      <TextContainerBody2
        key={id}
        id={id}
        img={img}
        title={title}
        description={description}
        textStyle={textStyle}
      />
    ));
  }

  return (
    <div className="container-fluid p-0 m-0">
      <TextContainerTitle
        text="Services"
        img="Services"
        textStyle={{ left: "10%", bottom: "10%", color: "white" }}
      />

      {displayContent(servicesArr)}

      <BottomBanner
        title="Interested? Check out our packages!"
        href="/packages"
        link="Learn More"
      />
    </div>
  );
}
