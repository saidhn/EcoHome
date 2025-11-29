import { ValuseInformation } from "./values";
const OurValues = () => {
    return (
        <div className="text-center bg-[#EEEAE2] py-5">
            <h2 className="font-bold py-5 text-[#474747] text-3xl">قيمنا </h2>
            <p className="text-center text-[#606060] mb-5">
                توجه هذه المبادئ الأساسية كل ما نقوم به، من التصميم إلى التسليم.
            </p>

            <div className="flex flex-wrap justify-center gap-6 py-10">
                {ValuseInformation.map((v) => {
                    const Icon = v.icon;
                    return (
                        <div
                            key={v.id}
                            className="bg-white w-64 p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
                        >
                            <div className="bg-[#EEEAE2] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                <Icon size={28} className="text-[#C09059]" />
                            </div>

                            <h3 className="font-bold text-[#474747] text-xl mb-2">{v.title}</h3>

                            <p className="text-[#707070] text-sm leading-relaxed">{v.disc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default OurValues;
