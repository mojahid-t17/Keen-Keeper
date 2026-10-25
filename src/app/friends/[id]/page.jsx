import {
  HiOutlineArchiveBox,
  HiOutlineBell,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePencilSquare,
  HiOutlinePhone,
  HiOutlineTrash,
  HiOutlineVideoCamera,
} from "react-icons/hi2";

import friends from "@/data/friend.json";

export default async function FriendDetails({ params }) {
  const { id } = await params;

  const friend = friends.find((item) => item.id === Number(id));

  if (!friend) {
    return <div className="p-4">Friend not found.</div>;
  }

  const statusLabel = {
    "on-track": "On Track",
    overdue: "Overdue",
  };

  return (
    <div className="mx-auto max-w-5xl p-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[180px_1fr]">
        {/* Profile */}
        <div className="space-y-2">
          <div className="rounded-lg bg-gray-100 p-4 text-center shadow-sm">
            <img
              src={friend.picture}
              alt={friend.name}
              className="mx-auto h-12 w-12 rounded-full object-cover"
            />

            <h2 className="mt-1 text-xs font-bold">{friend.name}</h2>

            <div className="mt-1">
              <span
                className={`badge badge-xs text-white ${
                  friend.status === "overdue"
                    ? "badge-error"
                    : "badge-success"
                }`}
              >
                {statusLabel[friend.status] ?? friend.status}
              </span>
            </div>

            <div className="mt-1">
              {friend.tags.map((tag) => (
                <span key={tag} className="badge badge-success badge-xs mr-1">
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <p className="mt-2 text-xs italic">{friend.bio}</p>

            <p className="mt-1 text-[9px]">Preferred: email</p>
            <p className="mt-1 text-[9px]">{friend.email}</p>
          </div>

          <button className="btn btn-sm w-full rounded-md bg-white text-xs font-normal text-gray-800 shadow-sm">
            <HiOutlineBell /> Snooze 2 Weeks
          </button>

          <button className="btn btn-sm w-full rounded-md bg-red-50 text-xs font-normal text-gray-700 shadow-sm">
            <HiOutlineArchiveBox /> Archive
          </button>

          <button className="btn btn-sm w-full rounded-md bg-white text-xs font-normal text-error shadow-sm">
            <HiOutlineTrash /> Delete
          </button>
        </div>

        {/* Main content */}
        <div className="space-y-3">
          {/* Statistics */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="flex h-28 flex-col items-center justify-center rounded-lg bg-gray-100 p-3 text-center shadow-sm">
              <p className="text-xl font-bold">{friend.days_since_contact}</p>
              <p className="text-md">Days Since Contact</p>
            </div>

            <div className="flex h-28 flex-col items-center justify-center rounded-lg bg-gray-100 p-3 text-center shadow-sm">
              <p className="text-xl font-bold">{friend.goal}</p>
              <p className="text-md">Goal (Days)</p>
            </div>

            <div className="flex h-28 flex-col items-center justify-center rounded-lg bg-gray-100 p-3 text-center shadow-sm">
              <p className="text-sm font-bold text-[#244D3F]">
                {new Date(`${friend.next_due_date}T00:00:00`).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    timeZone: "UTC",
                  }
                )}
              </p>
              <p className="mt-1 text-md">Next Due</p>
            </div>
          </div>

          {/* Relationship goal */}
          <div className="rounded-lg bg-gray-100 p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-medium text-green-700">
                Relationship Goal
              </h3>

              <button className="btn btn-xs rounded-sm">
                <HiOutlinePencilSquare size={12} />
                Edit
              </button>
            </div>

            <p className="mt-2">
              Connect every: <span className="font-bold">{friend.goal} days</span>
            </p>
          </div>

          {/* Quick Check-In */}
          <div className="rounded-lg bg-gray-100 p-3 shadow-sm">
            <h3 className="mb-2 text-xs font-medium">Quick Check-In</h3>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <button className="btn h-12 rounded-md border border-base-300 bg-base-200/40 font-normal">
                <span className="flex flex-col items-center gap-1">
                  <HiOutlinePhone size={17} />
                  <span className="text-[10px]">Call</span>
                </span>
              </button>

              <button className="btn h-12 rounded-md border border-base-300 bg-base-200/40 font-normal">
                <span className="flex flex-col items-center gap-1">
                  <HiOutlineChatBubbleLeftRight size={17} />
                  <span className="text-[10px]">Text</span>
                </span>
              </button>

              <button className="btn h-12 rounded-md border border-base-300 bg-base-200/40 font-normal">
                <span className="flex flex-col items-center gap-1">
                  <HiOutlineVideoCamera size={17} />
                  <span className="text-[10px]">Video</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}