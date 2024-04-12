import FadeDown from "../animation/FadeDown";
import FadeRight from "../animation/FadeRight";
<<<<<<< HEAD
import FadeTop from "../animation/FadeTop"; 
//import LinkButton from "../ui/LinkButton";
=======
import FadeTop from "../animation/FadeTop";
//import LinkButton from "../ui/LinkButton";
import playstore from "/images/playstorlogo.png";
>>>>>>> 18a9b92e7c36558337b803a558762d62f0aa6c14
import contactIllus from "/images/contact_illus.png";
import download_google from "/images/googleplay.png";
import download_apple from "/images/ioslogo1.jpg";

function ContactUsSection() {
  return (
    <div className=" bg-p1 pt-15">
      <div className="max-xxl:container xxl:ml-[calc((100%-1296px)/2)] flex justify-between text-white sm:max-xxl:gap-6 max-lg:flex-col ">
        <div className="flex flex-col justify-center items-start w-full lg:max-xxl:w-1/2 xxl:max-w-[550px] max-xxl:pb-8 max-xxl:overflow-hidden">
          <FadeDown>
            <p className="text-lg font-medium underline">The MotorPedia App</p>
          </FadeDown>
          <FadeRight>
            <h1 className="display-4 pb-6 pt-4">Coming Soon...</h1>
          </FadeRight>
          <FadeTop>
            <p className="pb-8">
             
            </p>
          </FadeTop>
          <div className="flex gap-5">
          <div className="w-[200px] h-[150px]">
            <img src={download_google} alt="download" className="bg-white rounded-xl" />
            {/* <img src={download_apple} alt="download" /> */}
          </div>
          <div className="w-[200px]  h-[150px]">
            <img src={download_apple} alt="download" className="bg-white rounded-xl" />
            {/* <img src={download_apple} alt="download" /> */}
          </div>
          </div>
          
        </div>
        <div className="w-full lg:max-xxl:w-1/2 self-stretch flex justify-center max-xxl:items-center lg:pt-10">
          <img src={contactIllus} alt="" className=" object-cover" />
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
