import {
  TextContainerTitle,
  TextContainerBody,
  BottomBanner,
} from "./PageComponent";

export default function Home() {
  const homeArr = [
    [
      "Expert",
      "Cutting Edge Expertise",
      "Unlock unparalleled cybersecurity with our elite hackers – where innovation meets impenetrable protection.",
      "Learn More",
      "/services",
      {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    ],
    [
      "Screens",
      "Tailored Solutions",
      "Your security blueprint, our expertise. Customized hacking solutions for a digital fortress that evolves with you.",
      "Learn More",
      "/package",
      {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    ],
    [
      "Handshake",
      "Ethical Partnership",
      "Powerful hacking for good. Collaborate with ethical experts committed to securing your digital world responsibly.",
      "Learn More",
      "/about",
      {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    ],
  ];

  function displayContent(Arr) {
    return Arr.map(([img, title, description, link, href, textStyle]) => (
      <TextContainerBody
        key={img}
        img={img}
        title={title}
        description={description}
        link={link}
        href={href}
        textStyle={textStyle}
      />
    ));
  }

  return (
    <div id="home" className="container-fluid p-0 m-0">
      <TextContainerTitle
        text="CipherHub"
        img="Programmer"
        textStyle={{ left: "10%", bottom: "25%", color: "white" }}
      />

      {displayContent(homeArr)}

      <BottomBanner
        title="Have Any Question?"
        href="/contact"
        link="Contact Us!"
      />
    </div>
  );
}
