"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Flower from '@/public/flower.png'
import Leaf from '@/public/leaf.png'
import NewGhost from '@/public/newGhost.png'
import Badge from '@/public/badge.png'

const MeetAhead = () => {
    return (
        <div className="px-20 relative mt-7 mb-32">
            <div
                style={{ height: "550px" }}
                className="bg-bgPeach overflow-hidden relative flex rounded-[2rem]"
            >
                <div className=" basis-1/2 px-7">
                    <div className="flex flex-col mt-20 gap-3 pl-7">
                        <div>
                            <p className="text-md text-left">Built Out of Frustration</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">Meet the ahead app</p>
                        </div>
                    </div>
                </div>
                <div className="basis-1/2 flex items-center pl-10">
                    <div className="flex flex-col gap-6 tracking-wider text-gray-600 items-center p-10">
                        <div>
                            <p className="text-lg">
                                A personalized pocket coach that provide
                                bite-sized,science-driven tools to boost emotional intelligence.
                            </p>
                        </div>
                        <div>
                            <p className="text-lg">
                                Think of it as a pocket cheerleader towards a better, more
                                fulfilling.
                            </p>
                        </div>
                    </div>
                </div>

                {/* circle div  */}
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    initial="hidden"
                    variants={{
                        hidden: { opacity: 1, x: 0, y: 20 },
                        visible: {
                            x: [0, -550],
                            y: [55, -18],
                        },
                    }}
                    animate={{
                        x: [0, -550],
                        y: [55, -18],
                    }}
                    transition={{
                        type: "tween",
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: 0.3
                    }}
                    className="bg-darkPeach h-60 w-60 absolute rounded-full"
                    style={{ bottom: "-5px", right: "590px" }}
                ></motion.div>

                {/* leaves division */}
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    initial="hidden"
                    variants={{
                        visible: {
                            x: [10, 10],
                            y: [55, -25],
                            rotate: 25,
                        },
                        hidden: { y: 55 },
                    }}
                    animate={{
                        x: [0, 10],
                        y: [55, -5],
                        rotate: 25,
                    }}
                    transition={{
                        type: "tween",
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: 0.6
                    }}
                    className="h-28 w-24 absolute"
                    style={{ right: "60%", top: "50%", transform: "translate(50%,50%)" }}
                >
                    <Image height={100} width={100} src={Leaf} alt="" className="-rotate-12 scale-150" />
                </motion.div>

                {/*Ghost Div  */}
                <div
                    style={{ top: "62%", left: "15%", transform: "translate(-50%,-50%)" }}
                    className="absolute flex justify-center items-center rounded-full bg-white h-56 w-56 border-[15px] border-borderGrey"
                >
                    <motion.div
                        transition={{ duration: "1.5" }}
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { rotate: [0, 25, -15, 0] },
                            hidden: { opacity: 0, scale: 0.5, rotate: 0 },
                        }}
                        className="h-20 w-16 inline-block"
                    >
                        <Image height={100} width={100} src={NewGhost} className="h-full w-full scale-150" alt="" />
                    </motion.div>

                    {/*Badge*/}
                    <motion.div
                        whileInView="visible"
                        viewport={{ once: true }}
                        initial="hidden"
                        variants={{
                            visible: { opacity: 1, scale: 1, y: 0, zIndex: -10 },
                            hidden: { y: 60, opacity: 0, scale: 0.5 },
                        }}
                        transition={{
                            type: "spring",
                            duration: "1.5",
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                        className="absolute h-11 w-11"
                        style={{ top: "-22px" }}
                    >
                        <Image height={100} width={100} src={Badge} alt="" className="scale-110" />
                    </motion.div>
                </div>
            </div>

            {/* flower div */}
            <motion.div
                whileInView="visible"
                viewport={{ once: true }}
                initial="hidden"
                variants={{
                    visible: { opacity: 1, rotate: 360 },
                    hidden: { opacity: 1 },
                }}

                transition={{
                    loop: Infinity,
                    ease: "linear",
                    duration: 2,
                }}
                style={{ right: "280px", top: "-20px" }}
                className="h-11 w-11 absolute "
            >
                <Image height={100} width={100} src={Flower} className="scale-110" alt="" />
            </motion.div>
        </div>
    );
};

export default MeetAhead;
