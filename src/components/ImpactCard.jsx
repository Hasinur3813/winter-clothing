const ImpactCard = ({ heading, title }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white p-6 border shadow-sm hover:shadow-lg transition-all duration-200 rounded-lg"
    >
      <h3 className="text-xl font-semibold text-primaryColor mb-2">
        {heading}
      </h3>
      <p className="text-gray-700">{title}</p>
    </div>
  );
};

export default ImpactCard;
