import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact</div>
                   <p className="flex flex-row items-center my-[5px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[5px]">+91-8076912096</span>    
                    </p>
                    
                    <p className="flex flex-row items-center my-[5px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">shreshth.vyas.2000@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Made with Passion by Shreshth Vyas !
            </div>
        </div>
    </div>
  )
}

export default Footer