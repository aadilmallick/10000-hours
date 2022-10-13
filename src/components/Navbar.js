import { Link } from "react-router-dom";

const Navbar = () => {
  const linklist = [
    { url: "/", text: "home" },
    { url: "/about", text: "about" },
  ];
  return (
    <nav id="main-nav">
      <img
        src="../../images/icons/logo-light.png"
        alt="my portfolio"
        className="logo"
      />
      <ul>
        {linklist.map((link) => (
          <Navlink
            url={link.url}
            text={link.text}
            key={link.url}
            current={link.url === "/"}
          />
        ))}
      </ul>
    </nav>
  );
};

const Navlink = ({ url, text, current }) => {
  return (
    <>
      <li>
        <Link to={url} className={current ? "navlink current" : "navlink"}>
          {text}
        </Link>
      </li>
    </>
  );
};

export { Navbar };
