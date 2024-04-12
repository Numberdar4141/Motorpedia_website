import FadeLeft from "../animation/FadeLeft";
import FadeTop from "../animation/FadeTop";

type Props = {
  sectionName: string;
  sectionTitle: string;
  sectionDesc: string;
};

function SectionHeadingCenter({ sectionTitle, sectionDesc }: Props) {
  return (
    <div className="flex justify-center items-center max-xxl:oversflow-hidden">
      <div className="  max-w-[700px] text-center flex justify-center items-center flex-col">
        <FadeLeft>
          <h1 className="display-4 text-[45px]  pt-4 pb-4 lg:pb-6">
            {sectionTitle}
          </h1>
        </FadeLeft>
        <FadeTop>
<<<<<<< HEAD
          <p className=" text-black">{sectionDesc}</p>
=======
          <p className="text-white">{sectionDesc}</p>
>>>>>>> 18a9b92e7c36558337b803a558762d62f0aa6c14
        </FadeTop>
      </div>
    </div>
  );
}

export default SectionHeadingCenter;
