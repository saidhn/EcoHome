import { PartnerInformation } from "../db/partnerInfo"
const Partner = ()=>{
    return(
<section className="py-10">
  <div className="text-center">
    <h2 className="font-bold py-5 text-[#474747] text-3xl">
      منتجاتنا المبتكرة
    </h2>
    <p className="text-center text-[#606060] mb-5">
      نعرض لكم مجموعة من المنتجات التي نقدمها باستخدام أحدث التقنيات.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-8 mt-10">
    {[
      { id: 1, src: "/v1.mp4" },
      { id: 2, src: "/v2.mp4" },
      { id: 3, src: "/v3.mp4" },
    ].map((v) => (
      <div
        key={v.id}
        className="bg-gray-50 p-3 rounded-xl shadow-md border border-gray-200"
      >
        <iframe
          className="w-[280px] h-[180px] rounded-lg"
          src={v.src}
          title={"video-" + v.id}
          allow=" encrypted-media"
        ></iframe>
      </div>
    ))}
  </div>
</section>


    )
}
export default Partner