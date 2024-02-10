import "./LandingPage.css";
import LightFocus from "../../../assets/images/LandingPage/LightFocus.png";
import introLandingPage from "../../../assets/images/LandingPage/IntroLandingPage.png";
import JackDanielsImage from "../../../assets/images/LandingPage/JackDaniels.png";
import RedLabelImage from "../../../assets/images/LandingPage/RedLabel.png";

export function LandingPage() {
  
  return (
    <>
      <div className="Intro">
        <div className="image-container">
          <img
            className="introLandingPageImage"
            src={introLandingPage}
            alt=""
          />
          <div className="TitleLandingPageIntro">Whisky n’ Blues</div>
          <div className="SubTitles">
            <div className="SubTitleLandingPageIntro1">
              Descubra o Whisky n' Blues:
            </div>
            <div className="SubTitleLandingPageIntro2">
              Whiskies de alta qualidade, blues envolvente,
            </div>
            <div className="SubTitleLandingPageIntro3">
              atmosfera genuína. Sua aventura começa aqui!
            </div>
          </div>
        </div>
      </div>
      <div className="WhiskiesInfo">
        <div className="WhiskiesBG">
          <img className="jackDanielsImg" src={JackDanielsImage} alt="" />
          <div className="lightFocusImg">
            <img src={LightFocus} alt="" />
          </div>
          <p className="textJackDaniels">
            O Jack Daniel's é uma escolha clássica, oferecendo um sabor
            <br></br>suave e marcante com notas de baunilha e carvalho tostado.
            <br></br> Ideal para apreciadores de whisky.
          </p>
        </div>
        <div className="WhiskiesBG">
          <img className="RedLabelImg" src={RedLabelImage} alt="" />
          <div className="lightFocusImg">
            <img src={LightFocus} alt="" />
          </div>
          <p className="textJackDaniels">
            O Johnnie Walker Red Label é uma escolha clássica e acessível,<br></br>
            perfeita para desfrutar em qualquer ocasião.
          </p>
        </div>
      </div>
    </>
  );
}
