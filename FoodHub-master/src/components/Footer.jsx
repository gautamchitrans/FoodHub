import "./Footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="Footer">
      <div className="social-media">
      <a href="https://github.com/dharamveer742" target="_blank"><i className="fa-brands fa-square-github"></i></a>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-square-google-plus"></i>
      </div>
      <div className="footer-bottom">
        <p className="year" id="copyright">Copyright &nbsp; <i class="fa-regular fa-copyright"></i>&nbsp;{year} Designed by gautam</p>
      </div>
    </div>
  );
};
export default Footer;
