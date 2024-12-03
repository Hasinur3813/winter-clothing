/* eslint-disable react/no-unescaped-entities */
const HowItWorks = () => {
  return (
    <section className="py-10 md:py-16 ">
      <h2
        data-aos="fade-up"
        className="text-center text-3xl font-bold text-primaryColor mb-3"
      >
        How It Works
      </h2>
      <p data-aos="fade-up" className="text-darkText mb-14 text-center ">
        Here's a simple breakdown of how you can contribute to our cause and
        help us spread warmth this winter.
      </p>

      {/* Timeline */}
      <div
        data-aos="fade-up"
        className="flex flex-col gap-5 justify-center items-center"
      >
        {/* Step 1 */}
        <div className="flex items-start space-x-4 px-3 md:px-0">
          <div className="w-10 h-10 rounded-full bg-primaryColor text-white flex items-center justify-center">
            1
          </div>
          <div className="max-w-2xl text-left">
            <h3 className=" text-lg sm:text-2xl font-bold text-primaryColor mb-2">
              Choose a Donation Campaign
            </h3>
            <p className="text-darkText">
              Browse through the available donation campaigns, and select a
              campaign in your division to donate.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start space-x-4 px-3 md:px-0">
          <div className="w-10 h-10 rounded-full bg-primaryColor text-white flex items-center justify-center">
            2
          </div>
          <div className="max-w-2xl text-left">
            <h3 className="text-lg sm:text-2xl font-bold text-primaryColor mb-2">
              Fill Out the Donation Form
            </h3>
            <p className="text-darkText">
              After selecting your division, click on the "Donate Now" button
              and fill out the donation form with the details.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start space-x-4 px-3 md:px-0">
          <div className="w-10 h-10 rounded-full bg-primaryColor text-white flex items-center justify-center">
            3
          </div>
          <div className="max-w-2xl text-left">
            <h3 className="text-lg sm:text-2xl font-bold text-primaryColor mb-2">
              Collection by Our Volunteers
            </h3>
            <p className="text-darkText">
              Once you've submitted your donation form, our volunteers will
              contact you to arrange a pickup of your items.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start space-x-4 px-3 md:px-0">
          <div className="w-10 h-10 rounded-full bg-primaryColor text-white flex items-center justify-center">
            4
          </div>
          <div className="max-w-2xl text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primaryColor mb-2">
              Supported Divisions
            </h3>
            <p className="text-darkText">
              We currently support the following divisions in Bangladesh:{" "}
              <span className="font-semibold text-primaryColor">Dhaka</span>,{" "}
              <span className="font-semibold text-primaryColor">Rangpur</span>,{" "}
              <span className="font-semibold text-primaryColor">
                Mymensingh
              </span>
              , and{" "}
              <span className="font-semibold text-primaryColor">Rajshahi</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
