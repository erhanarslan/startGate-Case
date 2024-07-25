import React from "react";

const ApplicationCriteria = () => {
  return (
    <div className="bg-opacity-50 text-white p-6 rounded-lg ml-[237px] space-y-4 font-san-francisco">
      <div className="justify-center items-center h-[100px] mt-[165px] font-san-francisco">
        <p className=" text-center font-extralight text-[45px] leading-[46.5px] text-white">
          GamesForge Incubation <br />{" "}
          <span className="gradient-text font-extrabold">
            Programme Application Criteria
          </span>{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-criteria shadow-custom-inset rounded-lg space-y-2 w-[708px] h-[869px]">
          <div className="text-[26px] w-[657px] h-[739px] ml-[16px] mt-[27px] mr-[35px] leading-[32px]">
            <ul className="list-disc list-inside">
              <li>
                Your team and project must operate in at least one of the
                following StartGate verticals:
                <ul className="list-disc list-inside ml-6">
                  <li>Game Development</li>
                  <li>Game Technologies Development</li>
                  <li>Game Industry Service Development</li>
                </ul>
                <br/>
              </li>
              <li>Founders or co-founders must be over 18 years old.</li>
              <br/>
              <li>The team must be incorporated.</li>
              <br/>
              <li>
                The team must be ready for the challenging competition in the
                gaming industry and consist of at least 2 people.
              </li>
              <br/>
              <li>
                The team must be willing to support you in this challenge and
                ready to meet StartGate&apos;s performance indicators.
              </li>
              <br/>
              <li>
                The team must be able to develop their pre-alpha prototypes into
                beta within 9 months.
              </li>
              <br/>
              <li>
                An engaging and informative pitch deck that describes your team
                and project is required.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-criteria shadow-custom-inset rounded-lg space-y-2 w-[708px] h-[869px] ml-[22px]">
          <div className="text-[26px] w-[645px] h-[800px] ml-[32px] mt-[27px] mr-[31px] leading-[32px]">
            <ul className="list-disc list-inside">
              <li>
                After passing the initial evaluation, you need to have the
                following documents to support your evaluation process and show us
                that you have planned &quot;Do you really want to exist in the
                gaming industry?&quot; well:
              </li>
              <br/>
              <ul className="list-disc list-inside ml-6">
                <li>Game Design Document</li>
                <li>Project Development Document</li>
                <li>Business Strategy Document</li>
                <li>Market Analysis Document</li>
                <li>Market Strategy Document</li>
                <li>Financial Projection Document</li>
              </ul>
              <br/>
              <li>
                In the application form, a video answering the following questions
                should be added to the &quot;Introduction Video&quot; section,
                which should not exceed 3 minutes and 250 MB:
              </li>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Why do you want to enter the gaming world and make a name for
                  yourself?
                </li>
                <li>Why do you want to be a part of StartGate?</li>
                <li>Why do you think your game will excite people?</li>
              </ul>
              <br/>
              <li>
                The team must resonate with StartGate&apos;s culture, values, and
                goals, reinforcing an inclusive and supportive ecosystem
                perception.
              </li>
            </ul>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default ApplicationCriteria;
