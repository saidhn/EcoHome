import { WhyUsInformation } from "../db/why"
const WhyUs = () =>{
    return(
        <section className="bg-[#EEEAE2]">
            <div className="text-center">
                <h2 className="font-bold py-5 text-[#474747] text-3xl">لماذا تختار EcoHomes</h2>
                <p className="text-center text-[#606060] mb-5">
                    نحن ملتزمون بتقديم منازل استثنائية تجمع بين الابتكار والاستدامة
                    والقدرة على تحمل التكاليف.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {WhyUsInformation.map(w=>{
                    const Icon = w.ico
                    return(
                        <div key={w.id} className="flex flex-col items-center text-center ">
                        <div className="p-4 bg-white rounded-full shadow transition transform hover:scale-110 hover:bg-[#C09059] flex items-center justify-center">
                            <Icon size={40} className="text-[#C09059] hover:text-white transition-colors" />
                        </div>

                        <div>
                            <h3 className="font-bold text-[#474747] text-lg">{w.title}</h3>
                            <p className="text-gray-600 text-[#606060]">{w.disc}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default WhyUs