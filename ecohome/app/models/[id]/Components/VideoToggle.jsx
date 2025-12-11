"use client";
import { useState } from "react";

const VideoModal = ({ videoUrl }) => {
  const [showModal, setShowModal] = useState(false);

  if (!videoUrl) return null;

  return (
<>
  {/* زر لفتح المودال */}
  <button
    onClick={() => setShowModal(true)}
    className="bg-[#C09059] hover:[#ddac73] text-white px-4 py-2 rounded"
  >
    مشاهدة الفيديو الدعائي
  </button>

  {/* مودال الفيديو */}
  {showModal && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 bg-opacity-80"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white rounded-lg p-4 max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* زر إغلاق */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-700 text-xl font-bold"
        >
          ×
        </button>

        {/* صندوق ثابت الأبعاد + Scroll عند اللزوم */}
        <div className="w-full h-[500px] overflow-auto rounded-lg shadow-lg bg-black">
          <video
            autoPlay
            controls
            muted
            className="w-full h-full object-contain"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )}
</>


  );
};

export default VideoModal;
