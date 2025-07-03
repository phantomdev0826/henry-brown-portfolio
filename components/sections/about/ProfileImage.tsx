import React from 'react';
import Image from 'next/image';
import HenryBrownImage from '@/public/me-5.jpg';
import Triangle from '@/public/assets/about/triangle.svg';
import Circle from '@/public/assets/about/circle.svg';
import Star from '@/public/assets/about/star.svg';

const ProfileImage = () => (
  <div className="w-full h-full flex justify-center items-center image-animation">
    <div className="relative w-[180px] h-[170px] lg:w-[300px] lg:h-[290px]">
      <div className="w-full h-full bg-accentColor shadow-md rounded-sm absolute -right-3 -bottom-3" />
      <Image
        className="absolute z-10 object-contain w-full h-full shadow-sm rounded-sm"
        width={300}
        height={300}
        priority
        alt="Profile image of Henry Brown"
        src={HenryBrownImage}
      />
      {/* Decorative SVGs */}
      <div className="absolute hidden lg:block -top-12 -right-12">
        <Image
          className="pointer-events-auto select-none"
          width={26}
          height={26}
          alt="Decorative triangle"
          src={Triangle}
        />
      </div>
      <div className="absolute hidden lg:block -bottom-14 -right-10">
        <Image
          className="pointer-events-auto select-none"
          width={22}
          height={22}
          alt="Decorative circle"
          src={Circle}
        />
      </div>
      <div className="absolute hidden lg:block -bottom-16 -left-10">
        <Image
          className="pointer-events-auto select-none"
          width={34}
          height={34}
          alt="Decorative star"
          src={Star}
        />
      </div>
    </div>
  </div>
);

export default ProfileImage; 