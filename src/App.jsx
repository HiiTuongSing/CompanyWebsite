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
    const path = window.location.pathname;
    if (path == "/about") {
      return <About />;
    } else if (path == "/packages") {
      return <Packages />;
    } else if (path == "/contact") {
      return <Contact />;
    } else if (path == "/services") {
      return <Services />;
    } else if (path == "/") {
      return <Home />;
    } else {
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
