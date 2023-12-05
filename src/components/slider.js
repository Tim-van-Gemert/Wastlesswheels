import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

const Slider = () => {
  return (
    <>
      <div className="flex flex-col h-fit items-center w-full overflow-hidden relative">
        <div className='w-full relative w-theme  pl-theme-lg'>
          {/* Swiper component with custom navigation */}
          <Swiper
            slidesPerView={1}
            spaceBetween={42}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            <SwiperSlide>
              <div className='flex flex-col max-w-[542px]'>
                <Image src="/step1.jpg" className='w-[542px] h-[396px]' width={542} height={396} alt="Home image" />
                <span className='mt-2 text-regular text-primary'>
                  Stap 1: Lorem ipsum dolor sit amet, conseers adipiscing elit, sed do eiusmod tempor incididunt
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='flex flex-col max-w-[542px]'>
                <Image src="/foodtruck_inside.jpg" className='w-[542px] h-[396px]' width={542} height={396} alt="Home image" />
                <span className='mt-2 text-regular text-primary'>
                  Stap 2: Lorem ipsum dolor sit amet, conseers adipiscing elit, sed do eiusmod tempor incididunt
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='flex flex-col max-w-[542px]'>
                <Image src="/foodtruck_inside.jpg" className='w-[542px] h-[396px]' width={542} height={396} alt="Home image" />
                <span className='mt-2 text-regular text-primary'>
                  Stap 3: Lorem ipsum dolor sit amet, conseers adipiscing elit, sed do eiusmod tempor incididunt
                </span>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom navigation buttons */}
          <div className='relative flex gap-5 mt-10'>
            <div className="swiper-button-prev rounded-full border-black border-solid border-[1px] text-black">text</div>
            <div className="swiper-button-next rounded-full border-black border-solid border-[1px]">text</div>
          </div>
    

        </div>
      </div>
    </>
  );
};

export default Slider;
