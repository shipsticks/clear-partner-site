const BenefitItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-4">
      <img src={`/images/${icon}.png`} alt={title} className="py-6 h-[112px]" />
      <div>
        <h3 className="text-lg mb-3 font-semibold">{title}:</h3>
        <p className="text-base font-normal">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
