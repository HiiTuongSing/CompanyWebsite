import {
  TextContainerTitle,
  TextContainerBody,
  BottomBanner,
  PhotoGallery,
} from "./PageComponent";

export default function About() {
  const aboutArr = [
    [
      "Group Project",
      "Empowering Cybersecurity",
      "At ChiperHub, we are dedicated to safeguarding the digital landscape through ethical hacking practices. As a leading cybersecurity firm, we specialize in identifying vulnerabilities within systems, networks, and applications to fortify defenses against potential cyber threats.",
      {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    ],
    [
      "Group Project 2",
      "Securing Your Digital Future",
      "ChiperHub offers comprehensive penetration testing, vulnerability assessments, and security audits to organizations seeking to enhance their cybersecurity posture. Our team of ethical hackers utilizes cutting-edge techniques and tools to proactively identify and address security weaknesses, ensuring the integrity and confidentiality of your valuable data. Trust ChiperHub to safeguard your digital assets and empower your organization to thrive in today's cyber landscape.",
      {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    ],
  ];

  function displayContent(Arr) {
    return Arr.map(([img, title, description, textStyle]) => (
      <TextContainerBody
        key={img}
        img={img}
        title={title}
        description={description}
        textStyle={textStyle}
      />
    ));
  }

  const imagesArr = ["Group 1", "Group 2", "Group 3"];

  return (
    <div className="container-fluid p-0 m-0">
      <TextContainerTitle
        text="About Us"
        img="McDonald"
        textStyle={{ left: "10%", top: "30%", color: "white" }}
      />

      {displayContent(aboutArr)}

      <PhotoGallery imagesArr={imagesArr} />

      <BottomBanner
        title="Have Any Question?"
        href="/contact"
        link="Contact Us!"
      />
    </div>
  );
}
