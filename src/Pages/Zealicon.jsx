
import Poll from "../Components/Poll";
import styles from "../styles/zealicon.module.css"; 
import ZealiconFooter from "../Components/ZealiconFooter";
import ZealiconNavbar from "../Components/ZealiconNavbar";
import ZeliconHero from "../Components/ZealiconHero";
import ZeliconEvents from "../Components/ZeliconEvents";
import ZealiconWinner from "../Components/ZealiconWinner";
import ZealiconCongratulation from "../Components/ZealiconCongratulation";
export default function Zealicon() {
  return(
    <div className= {styles.main}>
      <ZealiconNavbar />
      <ZeliconHero/>
      <ZealiconWinner/>
      <ZealiconCongratulation/>
      {/* <ZeliconEvents/> */}
      {/* <Poll /> */}
      <ZealiconFooter />
    </div>)
};
