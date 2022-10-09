import { Link } from "react-router-dom";

const Navbar = () => {
  const linklist = [
    { url: "/", text: "home" },
    { url: "/about", text: "about" },
    { url: "/howto", text: "how-to" },
  ];
  return (
    <nav id="main-nav">
      <img
        src="../../images/icons/logo-light.png"
        alt="my portfolio"
        class="logo"
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
