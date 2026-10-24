import data from "@/data/friend.json";
import Image from "next/image";
import Link from "next/link";
const FriendContent = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {" "}
      {/* Added px-4 so text doesn't touch the screen edge on mobile */}
      {/* summary section */}
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 justify-items-center items-center">
        {/* Card 1 */}
        <div className="card w-full max-w-xs card-sm shadow-sm text-center">
          {" "}
          {/* w-full allows fluid scaling, max-w-xs stops it from getting too stretched */}
          <div className="card-body">
            <h2 className="text-3xl font-bold text-[#244D3F]">10</h2>
            <p className="text-[#64748B]">Total Friends</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card w-full max-w-xs card-sm shadow-sm text-center">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-[#244D3F]">3</h2>
            <p className="text-[#64748B]">On Track</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card w-full max-w-xs card-sm shadow-sm text-center">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-[#244D3F]">6</h2>
            <p className="text-[#64748B]">Need Attention</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card w-full max-w-xs card-sm shadow-sm text-center bg-gray-100">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-[#244D3F]">12</h2>
            <p className="text-[#64748B]">Interactions This Month</p>
          </div>
        </div>
      </div>
      {/* Friends content section*/}
      <hr className="my-8 text-[#E9E9E9]" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {data.map((friend) => (
  <Link
    key={friend.id}
    href={`/friends/${friend.id}`}
    className="block"
  >
    <div className="card w-52 sm:w-60 shadow-sm bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
      <div className="avatar justify-center mt-4">
        <div className="w-24 rounded-full">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={50}
            height={50}
            unoptimized
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{friend.name}</h2>

        <p className="text-[#64748B]">
          {friend.days_since_contact} days since last contact
        </p>

        <p className="bg-green-200 px-3 py-1 rounded-full">
          {friend.tags.join(", ")}
        </p>

        <p
          className={`px-3 py-1 rounded-full ${
            friend.status === "Almost Due"
              ? "text-white bg-yellow-500"
              : friend.status === "overdue"
              ? "text-white bg-red-500"
              : friend.status === "on-track"
              ? "bg-green-900 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {friend.status}
        </p>
      </div>
    </div>
  </Link>
))}
      </div>
    </div>
  );
};

export default FriendContent;
