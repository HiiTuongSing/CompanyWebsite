import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Packages from "./Packages";
import Services from "./Services";
import PageNotFound from "./PageNotFound";

export default function App() {
  function displayPage() {
  const basePath = "/repository-name"; // Replace "repository-name" with your actual repository name
  const path = window.location.pathname.replace(basePath, "");

  switch (path) {
    case "/about":
      return <About />;
    case "/packages":
      return <Packages />;
    case "/contact":
      return <Contact />;
    case "/services":
      return <Services />;
    case "/":
      return <Home />;
    default:
      return <PageNotFound />;
  }
}


  return (
    <div className="container-fluid p-0">
      <Navbar />
      {displayPage()}
      <Footer />
    </div>
  );
}
