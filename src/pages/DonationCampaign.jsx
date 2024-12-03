import { useEffect, useState } from "react";
import RoutesHeader from "../components/RoutesHeader";
import CampaignCard from "../components/CampaignCard";

const DonationCampaign = () => {
  const [items, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(null);
        const res = await fetch("/campaigns.json");
        const items = await res.json();
        setItem(items);
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <RoutesHeader
        heading="Winter Clothing Donation Campaign"
        title="Help us reach those in need this winter by donating warm clothes. Every contribution makes a difference."
      />

      {loading && (
        <div className="flex justify-center items-center pt-10">
          <span className="text-primaryColor loading loading-bars loading-md lg:loading-lg"></span>
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center pt-10">
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Something went wrong!.</span>
          </div>
        </div>
      )}

      {/* donation campaign cards container */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {!loading &&
            !error &&
            items.map((item) => <CampaignCard key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default DonationCampaign;
