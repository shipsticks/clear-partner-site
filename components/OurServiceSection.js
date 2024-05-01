const OurServiceSection = () => {
  return (
    <div className="bg-[#F8F9FB] text-center lg:text-left px-8 py-14 md:px-24 xl:px-36 2xl:px-60 lg:py-16 w-full">
      <div className="flex flex-col gap-11 lg:flex-row justify-between items-center">
        <div className="lg:w-3/5">
          <p className=" text-[20px] font-semibold text-[#1C2938] mb-4">
            Ship & Play, powered by the trusted experts at Ship Sticks and Ship Skis,
            brings over a decade of experience in seamlessly delivering golf clubs, skis,
            snowboards, and more to satisfied customers worldwide. Now, we're extending this
            unparalleled service to your luggage.
          </p>
          <p className="text-gray-600 text-lg">
            We believe it’s time to travel differently, and we’re so confident in the quality
            of our service that we’re offering Clear members their first shipment on us.
            Experience the difference with Ship&Play—where your journey begins hassle-free.
          </p>
        </div>
        <div className="sm:flex-shrink-0 flex flex-col items-center justify-center text-center space-y-2 bg-white border border-gray-300 p-12 rounded-2xl sm:w-[395px] sm:h-[281px]">
          <img
            src="/images/ship-play-logo.png"
            alt="Ship&Play Logo"
            className="w-[229px]"
            // width={229}
            // height={47}
          />
          <span className="text-5xl">+</span>
          <img
            src="/images/clear-logo.png"
            alt="Clear Logo"
            className="w-[204px]"
            // width={204}
            // height={54}
          />
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection;
