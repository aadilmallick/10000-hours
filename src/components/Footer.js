const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-content container">
        <p>Copyright &copy; 2022. All Rights Reserved</p>
        <div className="links">
          <a href="https://github.com/aadilmallick/10000-hours" target="_blank">
            github
          </a>
          <a href="https://aadilmallick.com/" target="_blank">
            my site
          </a>
        </div>
        <div className="social">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
