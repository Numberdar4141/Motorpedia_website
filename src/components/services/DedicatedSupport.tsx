import LinkButton from "../ui/LinkButton";
<<<<<<< HEAD
import img from "/images/car-gif.webm";
import { useState } from "react";
import ModalVideo from "react-modal-video";
=======
import img from "/images/3601.jpg";
>>>>>>> 18a9b92e7c36558337b803a558762d62f0aa6c14

function DedicatedSupport() {
  const [isOpen, setOpen] = useState(false);
 

  return (
<<<<<<< HEAD
    <section className="stp-30 sbp-30 bg-[url(/images/counter_bg.jpeg)] ">
=======
    <section className="stp-30 sbp-30 bg-[url(/images/counter_bg.png)] ">
>>>>>>> 18a9b92e7c36558337b803a558762d62f0aa6c14
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 max-md:order-2 overflow-hidden">
        <video  autoPlay loop>
        <source src="/images/car-gif.webm"  type="video/webm" />
        Your browser does not support the video tag.
      </video>
          {/* <img
            src={img}
            alt=""
<<<<<<< HEAD
            className="hover:scale-110 duration-500 w-full h-full"
          /> */}
          {/* <ReactPlayer url={img} loop:true playing:true /> */}
=======
            className=" rounded-2xl duration-500 w-full h-full"
          />
>>>>>>> 18a9b92e7c36558337b803a558762d62f0aa6c14
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-start-7 flex justify-center items-start flex-col">
          <p className="bg-p1 py-3 px-5 rounded-full text-white ">
            360° Photoshoot
          </p>
          <h2 className="display-4 pt-4 text-white pb-6">360° WalkArounds</h2>
          <p className=" text-white pb-8">
<<<<<<< HEAD
            Revolutionize your online shopping experience with immersive,
            jaw-dropping features that leave shoppers spellbound
=======
          Revolutionize your online shopping experience with immersive, jaw-dropping features that leave shoppers spellbound
>>>>>>> 18a9b92e7c36558337b803a558762d62f0aa6c14
          </p>
          <LinkButton link="/contact" text="Contact Us" />
        </div>
      </div>
    </section>
  );
}

export default DedicatedSupport;
