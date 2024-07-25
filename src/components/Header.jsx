import Image from 'next/image';
import React from 'react'
import startGateLogo from '../../public/startGateLogo.png';


export default function Header () {
  return (
    <header className=" text-white bg-opacity-50 w-[1561.29px] h-[69px] mt-[70px] ml-[203px]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-col items-left">
          <Image src={startGateLogo} alt="StartGate" width={225} height={75} />
          <span className=" text-[16px]  font-normal font-bradley-hand leading-[19px]">
            Where dreams come true!
          </span>
        </div>
        <div className="mt-2 text-center">
          
        </div>
        <nav className="flex space-x-6 font-san-francisco">
          <a href="#" className="hover:text-gray-400">Biz Kimiz?</a>
          <a href="#" className="hover:text-gray-400">Portfolyo</a>
          <a href="#" className="hover:text-gray-400">Programlar</a>
          <a href="#" className="hover:text-gray-400">Network</a>
          <a href="#" className="hover:text-gray-400">SSS</a>
          <a href="#" className="hover:text-gray-400">İletişim</a>
        </nav>
        <div className="flex items-center space-x-4 font-san-francisco">
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Ziyaretçi Başvurusu
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-400">
            Başvur
          </button>
          <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
            <span className="text-white">👤</span>
          </div>
        </div>
      </div>
    </header>
  );
}
