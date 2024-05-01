import EmailInputComponent from "./EmailInputComponent";

const SpecialOfferDescription = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center xl:items-start px-8 py-14 lg:px-24 xl:px-44 2xl:px-60 lg:py-16 xl:gap-16 bg-[#49C44F] w-full">
      <div className="flex flex-col text-center xl:text-left justify-center gap-4 xl:w-1/2">
        <h2 className="text-4xl font-bold text-white leading-tight">
          Special Offer Description
        </h2>
        <p className="text-lg font-semibold text-white leading-normal">
          Enter your email to receive your promo code for a free one-way luggage shipment with any round-trip booking.
        </p>
      </div>
      <EmailInputComponent id="emailAddress" className="mt-6 w-full sm:w-11/12 md:w-4/5 xl:w-1/2" buttonBgColor="#1C2938" />
    </div>
  );
};

export default SpecialOfferDescription;
