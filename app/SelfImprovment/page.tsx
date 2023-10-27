"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BlueGhost from '@/public/blue-ghost.png'


const SelfImprovement = () => {


    return (
        <section className="px-20 mt-10 mb-24 ">
            <div className="flex flex-row justify-between items-center">
                <motion.div
                    className="inline-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
                    variants={{
                        visible: { opacity: 1, scale: 1, y: 0, x: 0 },
                        hidden: { opacity: 0, scale: 0, x: "-50%" },
                    }}
                >
                    <div className="text-xl font-semibold text-black">
                        Wrong with self improvement & how we&apos;re fixing it.
                    </div>
                    <div className="text-6xl pb-3 font-bold text-black">
                        Self Improvement. Ugh.
                    </div>
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    transition={{ duration: 2.1, ease: "easeInOut", type: "spring", delay: 0.3 }}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: {
                            opacity: 1,
                            scale: 1,
                            x: [0, -100, -300, -450, -500],
                            y: [35, 20, 10, 0, -10],
                            rotate: [-60, -45, -35, -35, -35, -35, -15],
                        },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                    className="flex items-center justify-center"
                >
                    <Image
                        src={BlueGhost}
                        alt="download applestore"
                        width={70}
                        height={70}
                    />
                </motion.div>
            </div>

            <div className="timeline px-20 pt-14 h-96 overflow-y-scroll no-scrollbar my-7">
                <div className="border-l-2 border-l-violet-300 flex flex-col gap-16">
                    
                </div>
            </div>
        </section>
    );
};

export default SelfImprovement;