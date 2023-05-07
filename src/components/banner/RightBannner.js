import React from 'react';
import { bannerImg } from '../../assets/index';

const RightBannner = () => {
    return (
        <div className='w-full lgl:w-1/2 flex justify-center items-center relative'>
            <img
                className='w-[300px] h-[400px] lgl:w-[480px] lgl:h-[500px] z-10'
                src={bannerImg}
                alt="mi-foto"
            />
            
            <div className='absolute bottom-0 lgl:w-[400px] lgl:h-[400px] w-[400px] h-[340px]
                bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center
                items-center'></div>
        </div>
    )
}

export default RightBannner