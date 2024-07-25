import React from 'react';
import FeatureBox from './FeatureBox';

const IncubationProgrammeOffer = () => {
    const features = [
        "Office space at StartGate Campus for 3 promising companies identified by StartGate",
        "Participation in training sessions to enhance your skills and talents",
        "Guidance from mentors to address any questions you may have",
        "Networking opportunities to help you become recognised in the game ecosystem",
        "Perks offered by the StartGate ecosystem to make your life easier (AWS, Google For StartUps, ClickUp, Marketing, and many more)",
        "Priority access to other programs at StartGate after graduation",
        "Access to the investor pool after graduation",
        "Opportunity for successful companies to showcase their products at StartGate The Arena Of Glory Demo Day",
        "24/7 access to StartGate Campus"
    ];

    const additionalFeatures = [
        "Shared workspace where you can be part of the ecosystem",
        "High-speed internet to support your work",
        "Access to meeting rooms for your group meetings",
        "Music room where you can create music or relax",
        "PodCast and Vlog Studio for your broadcasts",
        "Sleep capsules for resting at the 24/7 living StartGate campus",
        "Game room to experience new gaming adventures or connect with your gamer roots",
        "Acoustic meeting cabins for undisturbed personal meetings",
        "Unlimited access to delicious and always fresh coffee and tea"
    ];

    return (
        <div className=" font-san-francisco">
            <p className=" max-w-[751px] max-h-[94px] h-auto w-auto ml-[260px] text-[45px] leading-[46.5px] font-extralight text-white">
                What Does the GamesForge <br/><span className="leading-[46.5px] font-extrabold text-gate">Incubation Programme Offer?</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className=' ml-[260px]'>
            {features.map((feature, index) => (
                <FeatureBox key={index} text={feature} useGradient={index === 2} showBullet={true} />
            ))}
            </div>
            <div className=' ml-[85px]'>
            {additionalFeatures.map((feature, index) => (
                <FeatureBox key={index + features.length} text={feature} showBullet={true} />
            ))}
            </div>
            </div>
        </div>
    );
};

export default IncubationProgrammeOffer;
