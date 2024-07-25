// FeatureBox.jsx
import React from 'react';

const FeatureBox = ({ text, bgColor = 'bg-opacity-50', useGradient = false }) => {
  return (
    <div className={"max-w-[666px] mt-[14px] w-auto h-auto min-h-[72px]  hover:bg-feature-gradient transition-all duration-300 text-white flex items-center rounded-xl border border-opacity-0"}>
      <ul className="list-disc list-inside">
        <li className=' ml-1 text-[24px] font-normal leading-[32px] p-[12px] pr-[27px] pl-[11px]'>{text}</li>
      </ul>
    </div>
  );
};

export default FeatureBox;


// import React from 'react';

// const FeatureBox = ({ text, useGradient, showBullet }) => {
//     return (
//         <div className={`p-4 border rounded-lg ${useGradient ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' : 'bg-gray-800'} text-white`}>
//             <div className="flex items-start">
//                 {showBullet && <span className="mr-2 text-yellow-500">&#8226;</span>}
//                 <p>{text}</p>
//             </div>
//         </div>
//     );
// };

// export default FeatureBox;
