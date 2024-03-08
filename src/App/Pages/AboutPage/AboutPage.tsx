import "./AboutPage.css";
import backgroundAbout from "../../../assets/images/AboutImgs/image 5.png";
import versaPreview from "../../../assets/images/AboutImgs/VersaPreview.png";
import gitPreview from "../../../assets/images/AboutImgs/GitPreview.png";
import linkedinPreview from "../../../assets/images/AboutImgs/LinkedinPreview.png";

export default function AboutPge() {
  function ProjetoRecente() {
    return <p className="latestProject">&lt;PROJETO RECENTE/&gt;</p>;
  }
  function MeuGithub() {
    return <p className="latestProject">&lt;MEU GITHUB/&gt;</p>;
  }
  function MeuLinkedin() {
    return <p className="latestProject">&lt;MEU LINKEDIN/&gt;</p>;
  }
  function RedirectVersa() {
    window.open("https://onlineversa.vercel.app");
  }
  function RedirectGit() {
    window.open("https://github.com/GabryelKadmo");
  }
  function RedirectLinkedin() {
    window.open("https://www.linkedin.com/in/gabryel-kadmo/");
  }
  return (
    <>
      <div className="AboutPge">
        <img className="AboutBG" src={backgroundAbout} alt="" />
        <h1 className="Thanks">Obrigado por visitar este projeto!</h1>
        <p className="AboutProjectText">
          Projeto elaborado com o propósito de aprimorar e reiterar as melhores
          práticas no desenvolvimento web, empregando as tecnologias React e
          TypeScript.
        </p>
      </div>
      <div className="sectionRedirect">
        <div className="sectionRedirectVersa">
          <ProjetoRecente />
        </div>
        <div className="sectionRedirectGithub">
          <MeuGithub />
        </div>
        <div className="sectionRedirectLinkedin">
          <MeuLinkedin />
        </div>
        <div className="sectionRedirectLinkedin"></div>
        <div className="redirectVersa">
          <img onClick={RedirectVersa} className="PreviewsAbout" src={versaPreview} alt="" />
        </div>
      </div>
      <div className="redirectGit">
        <img onClick={RedirectGit} className="PreviewsAbout" src={gitPreview} alt="" />
      </div>
      <div className="redirectLinkedin">
        <img onClick={RedirectLinkedin} className="PreviewsAbout" src={linkedinPreview} alt="" />
      </div>
    </>
  );
}
