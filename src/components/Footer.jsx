import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <button className="link-button" >About</button>
          <button className="link-button" >Store locator</button>
          <button className="link-button" >FAQs</button>
          <button className="link-button" >News</button>
          <button className="link-button" >Careers</button>
          <button className="link-button" >Contact Us</button>
        </div>
        <p className="love">
          Design &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/kulsum0998"
          >
            &nbsp; Kulsum Anwar
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;