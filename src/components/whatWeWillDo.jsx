import Image from "next/image";

const WhatWeWillDo = () => {
    return (
      <div
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }} // Arka plan resminizin yolunu belirtin
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 p-8">
          <div className="flex flex-col md:flex-row items-center text-white space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/path-to-small-image.jpg" // Küçük resminizin yolunu belirtin
                alt="Illustration"
                className="rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">
                What Will We Do <span className="text-yellow-300">Together?</span>
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>We will attend training sessions to unlock the secrets of game entrepreneurship.</li>
                <li>We will prepare the necessary roadmaps to create a systematic structure for teams aiming to be successful companies.</li>
                <li>We will turn our prototypes into pre-alphas.</li>
                <li>We will participate in many events to expand our network.</li>
                <li>We will meet with mentors to improve the quality of our project.</li>
                <li>We will help our community and strengthen the sense of a supportive community.</li>
                <li>But most importantly, we will have a lot of fun and develop games.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhatWeWillDo;
  