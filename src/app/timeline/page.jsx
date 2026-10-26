

"use client";

import { useState } from "react";
import {
    HiOutlineChatBubbleLeftRight,
    HiOutlineHandRaised,
    HiOutlinePhone,
    HiOutlineVideoCamera,
} from "react-icons/hi2";

const timelineData = [
  { id: 1, type: "Meetup", name: "Tom Baker", date: "March 29, 2026" },
  { id: 2, type: "Text", name: "Sarah Chen", date: "March 28, 2026" },
  { id: 3, type: "Meetup", name: "Olivia Martinez", date: "March 26, 2026" },
  { id: 4, type: "Video", name: "Aisha Patel", date: "March 23, 2026" },
  { id: 5, type: "Meetup", name: "Sarah Chen", date: "March 21, 2026" },
  { id: 6, type: "Call", name: "Marcus Johnson", date: "March 19, 2026" },
  { id: 7, type: "Meetup", name: "Aisha Patel", date: "March 17, 2026" },
];

const interactionIcons = {
  Meetup: HiOutlineHandRaised,
  Text: HiOutlineChatBubbleLeftRight,
  Video: HiOutlineVideoCamera,
  Call: HiOutlinePhone,
};

const TimelinePage = () => {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? timelineData
      : timelineData.filter((item) => item.type === filter);

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-5 text-3xl font-bold text-gray-800">
          Timeline
        </h1>

        <div className="mb-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select select-bordered select-sm w-full max-w-xs border border-green-500 bg-white text-gray-600"
            aria-label="Filter timeline by interaction type"
          >
            <option value="All">All interactions</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
            <option value="Meetup">Meetup</option>
          </select>
        </div>

        <div className="space-y-3">
          {filteredData.length > 0 ? (
            filteredData.map((item) => {
              const Icon = interactionIcons[item.type];

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-md border border-gray-200 bg-white px-3 py-3 shadow-sm"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center text-xl text-[#244D3F]">
                    <Icon />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-[#244D3F]">
                      {item.type}
                      <span className="ml-1 font-normal text-gray-500">
                        with {item.name}
                      </span>
                    </p>

                    <p className="mt-0.5 text-xs text-gray-500">
                      {item.date}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="py-6 text-center text-sm text-gray-500">
              No interactions found.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default TimelinePage;
