import Image from "next/image";
// import ApplicationCriteria from "../components/ApplicationCriteria";
import IncubationProgrammeOffer from "../components/IncubationProgrammeOffer";
// import Services from "../components/Services";
import gameForge from "../../public/gameForge.png";
import gate from "../../public/gate.png";
import ApplicationCriteria from "../components/ApplicationCriteria";
import Services from "../components/Services";
import DreamsComeTrue from "../components/DreamsComeTrue";

// <ApplicationCriteria/>
//       <Services/>
      
export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[20px] mt-[82px] font-san-francisco">
        <span className="text-[32px] font-normal font-san-francisco text-white">GAMES FORGE</span>
        <span className="text-[12px] font-bold text-white">
          StartGate &gt; GamesForge
        </span>
      </div>
      <div className="flex flex-col justify-center items-center mt-[563px]">
        <Image
          className="shadow-custom"
          src={gameForge}
          alt="gameForge"
          width={511.35}
          height={185}
          
        ></Image>
        <span className="font-san-francisco font-medium text-[45px] leading-tight text-white">
          INCUBATION PROGRAMME
        </span>
      </div>
      <div className="flex flex-col justify-center items-center mt-[73px] font-san-francisco ">
        <p className="w-[820px] h-[78px] mt-[81px] text-[45px] leading-[39px]  font-light text-white text-center">
          What is the{" "}
          <span className="bg-custom-gradient font-extrabold bg-clip-text text-transparent">
            GamesForge Incubation
          </span>{" "}
          Programme?
        </p>
      </div>
      <div className="w-[1427px] h-[285px] rounded-xl border ml-[246px] mt-[46px] border-white flex font-san-francisco">
        <div className="w-[396px] h-[285px] rounded-xl border border-white flex flex-col justify-start  font-normal">
          <p className="ml-[49px] mr-[247px] mt-[38px] mb-[4px] w-[100px] h-[44px]  text-scope text-[25px] leading-[46.5px]">
            Scope
          </p>
          <p className="ml-[49px] w-[290px] h-[257px] text-[24px] font-normal text-white leading-[26px]">
            Teams that produce products to be developed in PC-Console, Mobile,
            GameTech, and other game development verticals.
          </p>
        </div>
        <p className="w-[933px] h-[128px] ml-[60px] mt-[82px] text-[24px] font-normal leading-[26px] text-white">
          GamesForge Incubation Programme is an online entrepreneurship
          programme where we embark on a nine-month journey of intensive
          development and investor meetings with fun and dynamic game companies
          that have completed the Pre-Alpha phase and are moving full throttle
          towards the Beta phase.
        </p>
      </div>
      <div className="flex items-start">
        <Image
            className="mt-[118px] ml-[185px]"
            src={gate}
            alt="gate"
            width={656}
            height={708}
          ></Image>
          <div className="ml-[56px] font-san-francisco">
            <p className="w-[677px] h-[44px]  mt-[258px]  text-gate text-[45px] font-extralight leading-[46.5px]">What Will We Do <span className="font-extrabold">Together?</span> </p>
            <p className="w-[80px] h-[2px] mt-[22px]   bg-white"></p>
            <p className="w-[776px] h-[352px] mt-[42px] text-[24px] leading-[32px] font-normal text-white">We will attend training sessions to unlock the secrets of game entrepreneurship.<br/>
            We will prepare the necessary roadmaps to create a systematic structure for teams aiming to be successful companies.<br/>
            We will turn our prototypes into pre-alphas.<br/>
            We will participate in many events to expand our network.<br/>
            We will meet with mentors to improve the quality of our project.<br/>
            We will help our community and strengthen the sense of a supportive community.<br/>
            But most importantly, we will have a lot of fun and develop games.<br/>
            </p>
          </div>
      </div>
      <IncubationProgrammeOffer/>
      <ApplicationCriteria/>
      <Services/>
      <DreamsComeTrue/>

        

    </div>
  );
}
