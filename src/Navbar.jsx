export default function Navbar() {
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      document.getElementById("navbar").classList.add("hidden");
    } else {
      document.getElementById("navbar").classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
  });

  const navArr = [
    ["Services", "/services"],
    ["About Us", "/about"],
    ["Packages", "/packages"],
    ["Contact", "/contact"],
  ];

  function displayNav(arr) {
    return arr.map(([link, href]) => (
      <li key={link} className="nav-item">
        <a className="nav-link" href={href}>
          {link}
        </a>
      </li>
    ));
  }

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

  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg bg-body-secondary fixed-top px-5 py-3 fs-5"
      >
        <div className="container-fluid">
          <a className="navbar-brand pe-3" href="/" aria-current="page">
            <i className="fa-solid fa-user-secret icon fs-3"></i>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {displayNav(navArr)}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item d-flex justify-content-between pt-xs-5">
                {displayIcon(iconArr)}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
