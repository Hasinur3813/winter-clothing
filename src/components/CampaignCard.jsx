import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const CampaignCard = ({ item }) => {
  return (
    <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden relative">
      {/* Status Badge */}
      <div
        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${
          item.status === "Active" ? "bg-green-500" : "bg-gray-400"
        }`}
      >
        {item.status}
      </div>

      {/* Image Section */}
      <figure>
        <img
          className="w-full h-64 object-cover"
          src={item.image}
          alt={item.title}
        />
      </figure>

      {/* Card Body */}
      <div className="card-body px-6 py-4">
        {/* Division Badge */}
        <div className="flex justify-end">
          <div className="w-fit flex items-center text-primaryColor px-3 py-1 rounded-full">
            <MdLocationPin className="mr-1 text-lg" />
            <span className="text-sm font-semibold">{item.division}</span>
          </div>
        </div>

        {/* Title and Description */}
        <h2 className="card-title text-2xl font-semibold text-primaryColor mb-2">
          {item.title}
        </h2>
        <p className="text-gray-700 mb-4">{item.description}</p>

        {/* Donate Button */}
        <div className="card-actions justify-end mt-6">
          <Link
            to={`/campaign/${item.id}`}
            className="btn bg-primaryColor text-white hover:!bg-accentColor px-6 py-2"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
