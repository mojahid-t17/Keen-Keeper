"use client";

import { useState } from "react";
import {
    HiOutlineChatBubbleLeftRight,
    HiOutlinePhone,
    HiOutlineVideoCamera,
} from "react-icons/hi2";

const QuickCheckIn = ({ friendName }) => {
  const [toast, setToast] = useState("");

  const handleCheckIn = (type) => {
    setToast(`${type} with ${friendName}`);

    setTimeout(() => setToast(""), 3000);
  };

  return (
    <>
      <div className="rounded-lg bg-gray-100 p-3 shadow-sm">
        <h3 className="mb-2 text-xs font-medium">Quick Check-In</h3>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <button
            onClick={() => handleCheckIn("Call")}
            className="btn h-12 rounded-md border border-base-300 bg-base-200/40 font-normal"
          >
            <HiOutlinePhone size={17} />
            Call
          </button>

          <button
            onClick={() => handleCheckIn("Text")}
            className="btn h-12 rounded-md border border-base-300 bg-base-200/40 font-normal"
          >
            <HiOutlineChatBubbleLeftRight size={17} />
            Text
          </button>

          <button
            onClick={() => handleCheckIn("Video")}
            className="btn h-12 rounded-md border border-base-300 bg-base-200/40 font-normal"
          >
            <HiOutlineVideoCamera size={17} />
            Video
          </button>
        </div>
      </div>

      {toast && (
        <div className="toast toast-end toast-top z-50">
          <div className="alert border-none bg-[#244D3F] text-white shadow-lg">
            <span>{toast}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickCheckIn;