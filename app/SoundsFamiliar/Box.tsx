import Image from "next/image";

const Box = ({ title, description, imageSrc, bgColor }: BoxProps) => (
  <div className={`rounded-xl bg-${bgColor} min-w-[350px] p-7 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}>
    {/* <Image width={70} height={70} alt="" src={imageSrc} /> */}
    <span className="text-4xl">{imageSrc}</span>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default Box;