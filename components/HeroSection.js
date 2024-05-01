import EmailInputComponent from "./EmailInputComponent";

const HeroSection = () => {
  return (
    <div className="relative text-center px-7 py-14 pt-16 md:py-12 lg:py-14 md:px-16 lg:px-36 xl:px-44 2xl:px-60 max-w-full">
      <h1 className="text-4xl lg:text-[3.25rem] text-white font-bold mb-6 leading-[1.375] break-words">
        Exclusive Offer Only Available for Clear Members:&nbsp;
        <span className="text-[#5CFF85]">
          Ship One Leg Free!
        </span>
      </h1>
      <p className="text-xl text-[1.75rem] font-semibold text-white mb-7 leading-[1.375]">
        Now you can fly through security and baggage lines
      </p>
      <div className="flex justify-center p-4">
        <EmailInputComponent id="emailAddress1" className="w-full lg:w-3/4" />
      </div>
    </div>
  );
};

export default HeroSection;
