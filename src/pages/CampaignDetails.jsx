import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoutesHeader from "../components/RoutesHeader";
import { MdLocationPin } from "react-icons/md";
import { toast } from "react-toastify";

const CampaignDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "",
    location: "",
    notes: "",
  });

  useEffect(() => {
    fetch("/campaigns.json")
      .then((res) => res.json())
      .then((items) => {
        setError(null);
        const findItem = items.find((i) => i.id === parseInt(id));
        setItem(findItem);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong!");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank you ! We will reach your destination soon`, {
      autoClose: 2000,
    });
    setFormData({ quantity: "", itemType: "", location: "", notes: "" });
  };

  return (
    <div>
      <RoutesHeader
        heading="Support Our Winter Clothing Campaign"
        title="Join our Winter Clothing Donation Campaign to help bring warmth to those in need. Your donation of blankets, jackets, and other winter essentials will make a real difference. Fill out the form below to schedule your contribution and help us spread warmth this winter."
      />
      <div className="container mx-auto py-10 px-4">
        {loading && (
          <div className="flex justify-center items-center py-10">
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
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* item Details */}
        {!loading && !error && (
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <img
              src={item?.image}
              alt={item?.title}
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover mb-4 rounded-lg shadow-lg"
            />

            <h1 className="text-3xl font-bold text-primaryColor mb-2">
              {item?.title}
            </h1>
            <p className="text-gray-700 mb-4">{item?.description}</p>

            {/* Division and Status */}
            <div className="flex gap-4 items-center justify-center mb-6">
              <div className="flex items-center bg-primaryColor text-white px-3 py-1 rounded-full">
                <MdLocationPin className="mr-1 text-lg" />
                <span className="text-sm font-semibold">{item?.division}</span>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                  item?.status === "Active" ? "bg-green-500" : "bg-gray-400"
                }`}
              >
                {item?.status}
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              <strong>Contact:</strong> {item?.contactInfo}
            </p>
          </div>
        )}

        {/* Donation Form */}
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-primaryColor mb-4">
            Donation Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Quantity of Items
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                placeholder="e.g., 2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Item Type
              </label>
              <input
                type="text"
                name="itemType"
                value={formData.itemType}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                placeholder="e.g., blanket, jacket"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Additional Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                placeholder="Any special instructions"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primaryColor hover:bg-accentColor duration-200 transition-all text-lg text-white font-semibold py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
