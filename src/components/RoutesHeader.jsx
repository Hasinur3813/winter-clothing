const RoutesHeader = ({ heading, title }) => {
  return (
    <div className="bg-primaryColor py-10 sm:py-16">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="font-bold text-xl sm:text-3xl md:text-3xl lg:text-4xl mb-4 text-white">
          {heading}
        </h1>
        <p className="text-sm sm:text-base text-white">{title}</p>
      </div>
    </div>
  );
};

export default RoutesHeader;
