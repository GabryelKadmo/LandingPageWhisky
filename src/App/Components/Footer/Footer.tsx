import "./Footer.css";
import Logo_Footer from "../../../assets/images/FooterImgs/Logo-Footer.png";
import GithubIcon from "../../../assets/images/FooterImgs/GitHubIcon.png";
import LinkedinIcon from "../../../assets/images/FooterImgs/LinkedinIcon.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="LogoAndText">
        <img className="logoFooter" src={Logo_Footer} alt="" />
        <p className="textLogo">Whisky n’ Blues made by Gabryel Kadmo</p>
      </div>
      <div className="MiddleInfo">
        <ul className="MenuSectionFooter">
          <li className="normalFooter"><a href="">Menu</a></li>
          <li className="smallFooter"><a href="">Produtos</a></li>
          <li className="smallFooter"><a href="">Sobre</a></li>
        </ul>
        <ul className="InfoSectionFooter">
          <li className="normalFooter"><a href="">Informações</a></li>
          <li className="smallFooter"><a href="">Contato</a></li>
          <li className="smallFooter"><a href="">Termos de Uso</a></li>
        </ul>
      </div>
      <div className="socialMediaFooter">
        <img className="githubIcon" src={GithubIcon} alt="" />
        <img src={LinkedinIcon} alt="" />
      </div>
    </footer>
  );
}
