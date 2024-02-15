import "./Brands.css";
import JackDanielsLogo from "../../../assets/images/BrandsImgs/JackDanielsLogo.png"
import DalmoreLogo from "../../../assets/images/BrandsImgs/DalmoreLogo.png"
import OldParrLogo from "../../../assets/images/BrandsImgs/OldParrLogo.png"
import WoodfordReserveLogo from "../../../assets/images/BrandsImgs/WoodfordReserveLogo.png"
import JohnnieWalkerLogo from "../../../assets/images/BrandsImgs/JohnnieWalkerLogo.png"
import ChivasRegalLogo from "../../../assets/images/BrandsImgs/ChivasRegalLogo.png"
import BallantineLogo from "../../../assets/images/BrandsImgs/BallantineLogo.png"


export function Brands() {
    return (
        <section className="BrandSection">
            <h1 className="titleBrandSection">MARCAS FAMOSAS</h1>
            <div>
                <img className="imgBrandsArea" src={JackDanielsLogo} alt="" />
                <img className="imgBrandsArea" src={DalmoreLogo} alt="" />
                <img className="imgBrandsArea" src={OldParrLogo} alt="" />
                <img className="imgBrandsArea" src={WoodfordReserveLogo} alt="" />
                <img className="imgBrandsArea" src={JohnnieWalkerLogo} alt="" />
                <img className="imgBrandsArea" src={ChivasRegalLogo} alt="" />
                <img className="imgBrandsArea" src={BallantineLogo} alt="" />
            </div>
        </section>
    )
}
