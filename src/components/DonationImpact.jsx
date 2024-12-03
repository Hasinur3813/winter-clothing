import ImpactCard from "./ImpactCard";

/* eslint-disable react/no-unescaped-entities */

const cardsContent = [
  {
    id: 1,
    heading: "1000+ People Helped",
    title:
      "Your donations have provided winter clothing to over 1000 people in need.",
  },
  {
    id: 2,
    heading: " 500+ Volunteers",
    title:
      "A dedicated team of over 500 volunteers is working tirelessly to distribute the clothing.",
  },
  {
    id: 3,
    heading: " 4 Divisions Covered",
    title:
      "We have successfully reached out to people in 4 divisions across Bangladesh.",
  },
];

const DonationImpact = () => {
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-primaryColor mb-6"
        >
          The Impact of Your Donation
        </h2>
        <p
          data-aos="fade-up"
          className="text-lg text-gray-700 mb-10 max-w-xl mx-auto"
        >
          Every donation counts! Here's how your contribution is helping
          communities across Bangladesh stay warm during the winter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cardsContent.map((data) => (
            <ImpactCard
              key={data.id}
              heading={data.heading}
              title={data.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;
