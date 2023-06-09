import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            BRAND LOYALTY <br className="sm:block hidden" />{" "}
            <span className="text-gradient">REDEFINED</span>{" "}
          </h1>
          
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Engage, Connect and Reward - A gamified loyalty platform bringing a new level of emotional connection between consumers and brands
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />


      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
