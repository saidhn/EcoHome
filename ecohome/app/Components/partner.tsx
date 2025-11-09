import { PartnerInformation } from "../db/partnerInfo"
const Partner = ()=>{
    return(
        <section>
          <div className="text-center">
                <h2 className="font-bold py-5 text-[#474747] text-3xl"> شركاؤنا الموثوق بهم </h2>
                <p className="text-center text-[#606060] mb-5">
                    نحن نتعاون مع الشركات الرائدة في الصناعة لتقديم
 جودة وخدمة استثنائية.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
  {PartnerInformation.map((p) => (
    <div 
      key={p.id} 
      className="flex flex-col items-center bg-gray-50  p-4 rounded-lg shadow-md"
    >
      <img 
        className="w-14 h-14 rounded-full mb-3 border border-gray-200 dark:border-gray-700" 
        src={p.logo} 
        alt={p.name}
      />
      <h3 className="text-md font-medium text-gray-800 ">{p.name}</h3>
    </div>
  ))}
</div>

        </section>
    )
}
export default Partner