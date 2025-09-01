import React from 'react';
import PlayIcon from '../../../public/svgs/playIcon';
import Image from 'next/image';
import videoclip from '../../../public/images/video_clip.png';

const PropertyClip = () => {
    return (
        <div className="lg:h-[669px] h-[350px] my-32 relative flex justify-center items-center">
            <div className="absolute"><PlayIcon /></div>
            <Image className="bg-cover object-fill w-full h-full bg-no-repeat" src={videoclip} alt="payAgent video clip" />
            <div className="bg-black/40 absolute top-0 left-0 h-full" />
        </div>
    );
};

export default PropertyClip;