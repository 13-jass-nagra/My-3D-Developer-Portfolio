import { socialImgs } from "../constants/index";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
  {socialImgs.map((socialImg, index) => (
    <a
      key={index}
      href={socialImg.url}
      target="_blank"
      rel="noopener noreferrer"
      className="icon"
    >
      <img
        src={socialImg.imgPath}
        alt={`${socialImg.name} icon`}
        className="w-8 h-8 hover:scale-110 transition-transform duration-300"
      />
    </a>
  ))}
</div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Jashandeep Singh. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;