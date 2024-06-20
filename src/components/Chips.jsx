import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const Chips = () => {

    const videoRef = useRef();

    useGSAP(() => {
        gsap.from("#chip",{
            scrollTrigger: {
                trigger: "#chip",
                start: "20% bottom"
            },
                opacity: 0,
                scale: 1.1,
                duration: 2,
                ease: "power2.inOut"                
        })

        animateWithGsap(
            ".g_fadeIn",
            { y: 0, opacity: 1, ease : 'power2.inOut', duration: 1}
        )
    },[]);

  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <div id="chip" className='flex-center w-full my-20'>
                <img src={chipImg} alt="chip" width={180} height={180}/>
            </div>

            <div className='flex flex-col items-center'>
                <h2 className="chip-title">
                    A17 Pro chip.
                    <br /> A monster win for gaming.
                </h2>

                <p className='chip-subtitle'>
                It’s here. The biggest redesign in the history of Apple GPUs.
                </p>
            </div>

            <div className='mt-10 md:mt-20 mb-14'>
                <div className='relative h-full flex-center'>
                    <div className='overflow-hidden'>
                        <img src={frameImg} alt="frame" className='bg-transparent relative z-10'/>
                    </div>

                    <div className='chip-video'>
                        <video
                        className='pointer-events-none' playsInline preload='none' muted autoPlay ref={videoRef}
                        >
                            <source src={frameVideo} type='video/mp4'/>
                        </video>
                    </div>
                </div>

                <p className='text-gray font-semibold text-center mt-3'>Honkai: Star Rail</p>
                </div>

                <div className='chip-text-container'>
                    <div className='flex flex-1 justify-center flex-col gap-10'>
                        <p className='chip-text g_fadeIn'>
                        A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                            <span className='text-white'>
                            best graphics performance by far
                            </span>.
                        </p>

                        <p className='chip-text g_fadeIn'>
                        Mobile {' '}
                        <span className='text-white'>games will look and feel so immersive
                        </span>, with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
                        </p>
                    </div>

                    <div className='flex-1 flex justify-center flex-col g_fadeIn'>
                        <p className='chip-text'>New</p>
                        <p className='chip-bigtext'>Pro-class GPU</p>
                        <p className='chip-text'>6 cores</p>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Chips