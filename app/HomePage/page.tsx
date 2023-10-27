"use client"

import Image from 'next/image';
import React from 'react';
import AppStore from '@/public/app-store-badge.png';
import Mobile from '@/public/mobile.svg';
import BlueGhost from '@/public/blue-ghost.png';
import RedGhost from '@/public/red-ghost.png';
import NewGhost from '@/public/newGhost.png';
import Leaf from '@/public/leaf.png';
import SingleLeaf from '@/public/singleLeaf.png';
import { StarIcon } from 'lucide-react';
import { motion } from 'framer-motion';


const Home = ({ title }: HomeProps) => {
    return (
        <div className='px-10 mt-10'>
            <div className='flex relative h-[600px] rounded-[2rem] bg-[#eeebfe] flex-col md:flex-row overflow-hidden'>
                {/* Left Side */}
                <div className='pl-20 basis-1/2 flex flex-col justify-center items-start'>
                    <p className='mb-4'>{title}</p>
                    <h1 className='font-bold text-6xl mb-10'>
                        Master your life <br /> by mastering <br /> emotions
                    </h1>
                    <div className='flex gap-7 items-center w-full'>
                        <Image height={50} width={150} src={AppStore} alt='app-store' />
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                {[...Array(5)].map((_, index) => {
                                    return (
                                        <StarIcon key={index} size={20} fill='#FFC107' color="#FFC107" />
                                    );
                                })}
                            </div>
                            <p className="">100+ AppStore reviews</p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className='basis-1/2 flex items-center justify-center w-full'>
                    <div className='h-64 w-64 flex items-center '>
                        <div className='relative h-32 w-32 bg-purple-400'></div>
                        <Image className='h-full w-full' height={100} width={100} src={Mobile} alt="" />
                    </div>
                    <motion.div
                        whileInView="visible"
                        viewport={{ once: true }}
                        initial="hidden"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: { opacity: 1, rotate: 360 },
                        }}
                        transition={{
                            type: "",
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        style={{ border: "3px solid white ", borderStyle: "dashed" }}
                        className=' absolute rounded-full h-96 w-96  border-dashed border-white'
                    >
                        {/* red ghost */}
                        <motion.div
                            whileInView="visible"
                            viewport={{ once: true }}
                            animate={{ rotate: -360 }}
                            transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                            style={{ top: "55px" }}
                            className='absolute h-16 w-12'
                        >
                            <Image height={100} width={100} className='h-full w-full' src={RedGhost} alt="" />
                        </motion.div>
                        {/* blue ghost */}
                        <motion.div
                            whileInView="visible"
                            viewport={{ once: true }}
                            animate={{ rotate: -360 }}
                            transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                            style={{ right: "-30px", top: "50%", transform: "translate(-50%,-50%)" }} className='absolute h-16 w-14'
                        >
                            <Image height={100} width={100} className='h-full w-full' src={BlueGhost} alt="" />
                        </motion.div>
                        {/* voilet ghost */}
                        <motion.div
                            whileInView="visible"
                            viewport={{ once: true }}
                            animate={{ rotate: -360 }}
                            transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                            style={{ bottom: "-22px", right: "50%" }}
                            className='absolute h-14 w-12'
                        >
                            <Image height={100} width={100} src={NewGhost} alt="" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Leaf div */}
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    initial="hidden"
                    variants={{
                        visible: {
                            x: [0, 10],
                            y: [55, -25],
                            rotate: 25,
                        },
                        hidden: { y: 35 },
                    }}
                    animate={{
                        x: [0, 10],
                        y: [55, -5],
                        rotate: 25,
                    }}
                    transition={{
                        type: "tween",
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="h-28 w-24 absolute"
                    style={{ right: "50%", top: "40%", transform: "translate(50%,50%)" }}
                >
                    <Image height={100} width={100} src={Leaf} alt="" />
                </motion.div>

                {/* Circle 1 */}
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    animate={{ x: -150 }}
                    transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                    style={{ bottom: "-13px", left: "150px" }}
                    className='absolute bg-orange-300 rounded-full h-12 w-12'>
                </motion.div>

                {/* Circle 2 */}
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    animate={{ y: -150 }}
                    transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                    style={{ left: "-15px", top: "50%" }}
                    className='absolute bg-blue-300 rounded-full h-12 w-12'>
                </motion.div>

                {/* Circle 3 */}
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    animate={{ x: -150 }}
                    transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                    style={{ right: "150px", top: "-15px" }}
                    className='absolute bg-yellow-300 rounded-full h-12 w-12'>
                </motion.div>

                {/* Single Leaf */}
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    animate={{ x: 150 }}
                    transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                    style={{ left: "150px", top: "0px" }}
                    className='absolute  h-12 w-12'
                >
                    <Image src={SingleLeaf} height={48} width={48} alt="" />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
