import { solutionsFeatures } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";
import SectionHeadingCenter from "../global/SectionHeadingCenter";
import LinkButton from "../ui/LinkButton";
import circleIcon from "/images/circleIcon.png";
import sliceIcon from "/images/sliceIcon.png";
import solutionIllus from "/images/design2.png";
function SolutionsSection() {
  return (
    <section className="stp-30 sbp-30 relative">
      <img
        src={circleIcon}
        alt=""
        className="absolute top-10 left-0 max-xxl:hidden xxl:-left-72 xxxl:-left-40"
      />
      <img
        src={sliceIcon}
        alt=""
        className="absolute right-0 sm:right-2 lg:right-10 top-10 xl:top-32 max-md:h-[80px]"
      />
      <div className="container z-10 relative">
        <div className="flex justify-center items-center ">
          <SectionHeadingCenter
            sectionName="Solutions"
            sectionTitle="Why digitalization matters ?"
            sectionDesc="Digitalization is key for auto dealership for better customer engagement and operations. It provides tools like online configurators, meeting modern needs. By optimizing processes and enabling data-driven decisions, it cuts costs and boosts efficiency. Effective digital use also enhances marketing, satisfaction, and conversion in a Competitive market."
          />
        </div>
        <div className="grid grid-cols-12 stp-15 max-lg:gap-6">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex justify-center items-center overflow-hidden self-stretch">
              <img
                src={solutionIllus}
                alt=""
                className=" hover:scale-110 rounded-2xl duration-500 w-full"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex justify-center items-center  lg:items-center flex-col">
            <h1 className="heading-1 pb-3 ">Upgrade your Driving </h1>
            <h1 className="heading-1 pb-2">Experience</h1>
            <p className="text-bodyText text-xl">
            Tailored selection just for you
            </p>
            <div className="grid grid-cols-2  gap-4 lg:gap-6 py-6 lg:py-10 w-full">
              {solutionsFeatures.map(({ id, name, icon }, idx) => (
                <div className=" group col-span-2 sm:col-span-1" key={id}>
                  <StaggerEffect id={idx}>
                    <div className="flex justify-start items-center gap-5">
                      <span className="rounded-full border border-strokeColor bg-softBg p-3 sm:p-5 text-3xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500">
                        {icon}
                      </span>
                      <p className="text-lg font-medium group-hover:text-s1 duration-500">
                        {name}
                      </p>
                    </div>
                  </StaggerEffect>
                </div>
              ))}
            </div>
            <div className=" flex justify-start  items-start w-full">
              <LinkButton link="/contact" text="Contact Us" />
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </section>
  );
}

export default SolutionsSection;
