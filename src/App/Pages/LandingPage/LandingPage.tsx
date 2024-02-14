import "./LandingPage.css";
import introLandingPage from "../../../assets/images/LandingPage/IntroLandingPage.png";
import JackDanielsImage from "../../../assets/images/LandingPage/JackDaniels.png";
import RedLabelImage from "../../../assets/images/LandingPage/RedLabel.png";
import WoodfordReserveImage from "../../../assets/images/LandingPage/WoodfordReserve.png";
import OldParrImage from "../../../assets/images/LandingPage/OldParr.png";

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
          <p className="DescJackDaniels">
            O Jack Daniel's é uma escolha clássica, oferecendo um sabor suave e
            marcante com notas de baunilha e carvalho tostado. Ideal para
            apreciadores de whisky.
          </p>
        </div>
        <div className="WhiskiesBG">
          <img className="RedLabelImg" src={RedLabelImage} alt="" />

          <p className="DescRedLabel">
            O Johnnie Walker Red Label é uma escolha clássica e acessível,
            perfeita para desfrutar em qualquer ocasião.
          </p>
        </div>
        <div className="WhiskiesBG">
          <img
            className="WoodfordReserveImg"
            src={WoodfordReserveImage}
            alt=""
          />
          <p className="DescWoodfordReserve">
            O Whisky Woodford Reserve é sofisticado e distinto, com notas de
            carvalho tostado, baunilha e especiarias. Ideal para apreciadores de
            bourbon.
          </p>
        </div>
        <div className="WhiskiesBG">
          <img className="OldParrImg" src={OldParrImage} alt="" />
          <p className="DescOldParr">
            O Whisky Old Parr 12 anos oferece um sabor refinado e encorpado, com
            notas suaves de frutas secas, mel e especiarias. Ideal para
            apreciadores de whisky.
          </p>
        </div>
      </div>
    </>
  );
}
