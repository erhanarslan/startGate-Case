import Image from "next/image";
import startGateFooterLogo from "../../public/startGateFooterLogo.png";
import { SocialIcon } from "react-social-icons";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-opacity-50 text-white mt-[254px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        <div className="mb-6 md:mb-0 xl:ml-[323px] md:ml-[132px]">
          <Image
            src={startGateFooterLogo}
            alt="StartGate"
            width={192}
            height={41.6}
            className="mt-[55px] "
          />

          <div className="flex items-start ">
            <FaMapMarkerAlt className="w-[17px] h-[23px]  mt-[21.4px]" />
            <p  className="w-[275px] h-[52px] mt-[22.4px] ml-[13px] font-poppins font-normal text-[16px] leading-[24px] ">
              Maslak Mahallesi Eski Büyük Dere Caddesi No:21
              SARIYER/İSTANBUL
            </p>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="w-[18px] h-[20px] mt-[11px] " />
            <p className="ml-[12px] mt-[33.4px] font-poppins font-normal text-[16px] leading-[24px]">+90 850 309 24 92</p>
          </div>
          <div className="flex items-center ">
            <FaEnvelope className="w-[20px] h-[15px] mt-[22px] " />
            <p className="ml-[11px] mt-[18px] font-poppins font-normal text-[16px] leading-[24px]">info@startgate.com</p>
          </div>
          <div className="flex items-center mt-[28px] w-[294px] h-0 ml-2 border-[0.5px] shadow-custom-inset border-white"></div>
          <p className="ml-[11px] mt-[43px] font-poppins font-normal text-[16px] leading-[24px]"> Sosyal Medya Adreslerimiz</p>
          <div className="flex space-x-4 mt-4">
            <SocialIcon
              url="https://www.facebook.com"
              fgColor="#ffffff"
              bgColor="#1D022A"
            />
            <SocialIcon
              url="https://www.instagram.com"
              fgColor="#ffffff"
              bgColor="#1D022A"
            />
            <SocialIcon
              url="https://www.twitter.com"
              fgColor="#ffffff"
              bgColor="#1D022A"
            />
            <SocialIcon
              url="https://www.youtube.com"
              fgColor="#ffffff"
              bgColor="#1D022A"
            />
            <SocialIcon
              url="https://www.linkedin.com"
              fgColor="#ffffff"
              bgColor="#1D022A"
            />
          </div>
        </div>
        <div className="mb-6 md:mb-0 font-poppins font-normal text-[16px] leading-[24px]">
          <p className="text-xl font-semibold mt-[54px] w-[129px] h-[30px] ">Biz Kimiz?</p>
          <ul>
            <li>
              <a href="#" className="hover:underline mt-[35px] w-[80px] h-[24px]">
                StartGate
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mt-[10px]">
                Takımımız
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mt-[10px]">
                Kurumsal Kimlik Rehberi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mt-[10px]">
                İletişim
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mt-[10px]">
                Sıkça Sorulan Sorular
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mt-[54px]">Programlar</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Guild Programı
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Squad Programı
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dream Forge Programı
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Game Forge Programı
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tekmer Programı
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Game Ascend Programı
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Global XPAN Programı
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mt-[54px]">Haberler</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Haberler
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Duyurular
              </a>
            </li>
          </ul>
          <form className="mt-4">
            <label className="block text-white mb-2">
              Bizden haberdar olmak için abone ol
            </label>
            <div className="flex">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full p-2 rounded-l-md bg-gray-200 text-gray-800"
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-700">
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-10 border-t border-gray-700 pt-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 text-sm ml-[323px]">
            <a href="#" className="hover:underline w-[141px] h-[21px]">
              Politikalarımız
            </a>
            <a href="#" className="hover:underline ml-[26px] w-[103px] h-[21px]">
              Mevzuat
            </a>
            <a href="#" className="hover:underline ml-[26px] w-[185px] h-[21px]">
              Kalite Yönetim Sertifikaları
            </a>
          </div>
          <p className="text-sm mt-4 md:mt-0">
            © Copyright StartGate. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
