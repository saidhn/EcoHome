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
      onClick={() => setShowModal(false)} // إغلاق عند الضغط على الخلفية
    >
      <div
        className="bg-white rounded-lg p-4 max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()} // منع إغلاق عند الضغط داخل المودال
      >
        {/* زر إغلاق المودال */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-700 text-xl font-bold"
        >
          ×
        </button>

        {/* الفيديو */}
        <video controls className="w-full rounded-lg shadow-lg">
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  )}
</>

  );
};

export default VideoModal;
