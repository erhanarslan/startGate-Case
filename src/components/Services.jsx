import Image from "next/image";
import React from "react";
//import icons from '../../public/icons'

const services = [
  { name: "Ücretsiz Ortak Çalışma Alanı", icon: "icons/icon1.svg" },
  { name: "Mentorluk", icon: "icons/icon2.svg" },
  { name: "İş Koçu Desteği", icon: "icons/icon3.svg" },
  {
    name: 'STARTGATE "Ecosystem Member" networkten faydalanma',
    icon: "icons/icon4.svg",
  },
  { name: "StartGate Etkinliklerine Katılım İmkanı", icon: "icons/icon5.svg" },
  { name: "Perk Desteği", icon: "icons/icon6.svg" },
  { name: "Kafeterya", icon: "icons/icon7.svg" },
];

const Services = () => {
  return (
    <div className="flex items-center bg-opacity-50 pt-[274px]" >
      <div className="ml-[257px]">
        <p className=" font-san-francisco font-bold mb-4 gradient-text leading-[46.5px] text-[45px] ">
          Hizmetler
        </p>
        <div className="w-[248px] h-[127px] ">
          <p className="text-[26px] leading-[32px] text-white font-normal" >DreamForge Programı’nın Sağladığı İmkanlar</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 pl-[90px]">
        {services.map((service, index) => (
          <div
            key={index}
            className=" ml-[23px] mt-[23px] w-[244px] h-[276px] flex flex-col items-center p-4 bg-opacity-50 rounded-[12px] border border-whiteOpacity transition-colors duration-300 text-white hover:bg-scope"
          >
            <Image 
              src={service.icon}
              alt={service.name}
              width={80}
              height={80}
              className="m-[81px] mt-[61px] mb-[38px]"
            />
            <p className="items-center">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
