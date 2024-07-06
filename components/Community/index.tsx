import { FC } from "react";

import communityPicture from '@/assets/community-bg.png';
import logoPicture from '@/assets/logo-bg.png';
import person1Picture from '@/assets/community/person-1.png';
import person2Picture from '@/assets/community/person-2.png';
import person3Picture from '@/assets/community/person-3.png';
import person4Picture from '@/assets/community/person-4.png';
import person5Picture from '@/assets/community/person-5.png';
import { LogoIcon } from "../UI/Icons";


const Community: FC = () => {

    return (
        <div id="community" className="min-h-300 pt-96 pl-78 pb-100 rounded-lg" style={{ backgroundImage: `url(${communityPicture.src})` }}>
            <div>
                <h4 className="uppercase text-heading font-medium tracking-wide">learn about us</h4>
                <p className="text-huge uppercase font-round max-w-1000 text-center mt-36">
                    Armenian
                    <span className="font-round text-huge bg-white-1 text-purple-2 rounded-xs p-8 ml-10">
                        Community
                    </span>
                </p>
            </div>
            <div className="mt-83 flex">
                <div>
                    <img className="w-271" src={person1Picture.src} alt="person" />
                </div>
                <div className="ml-5 w-210">
                    <img className="w-full" src={person2Picture.src} alt="person" />
                    <div className="bg-white-1 rounded-special2 pt-12 px-6 pb-6 w-full">
                        <p className="text-black-1 text-medium font-semibold">Solana brings people <span className="text-purple-1 font-bold text-medium">together.</span></p>
                        <div className="flex justify-end mt-61">
                            <LogoIcon />
                        </div>
                    </div>
                </div>
                <div className="ml-5">
                    <img className="w-530" src={person3Picture.src} alt="person" />
                </div>
                <div className="ml-5">
                    <img className="w-355" src={person4Picture.src} alt="person" />
                </div>
            </div>
            <div className="flex items-start justify-between mt-63">
                <div className="-mt-31">
                    <p className="text-huge2 font-round">{'>'}50</p>
                    <p className="text-heading -mt-14">community members</p>
                </div>
                <p className="text-26 w-793 font-extralight mr-106">
                    <span className="text-26 ml-133 font-extralight">The arrival of Solana in Armenia has sparked significant</span> enthusiasm and discussion within the nation's tech community.As a high-performance blockchain solution, Solana has managedto garner considerable <span className="text-26 opacity-6 text-white-4 font-extralight">interest and acclaim since becomingavailable in the country two years ago.</span>
                </p>
            </div>
        </div>

    )
}


export default Community