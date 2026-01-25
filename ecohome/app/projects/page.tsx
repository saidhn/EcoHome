import NavBar from "../Components/Navbar"
import ProductCards from "./Components/ProjectCards"

const ProductHouses = ()=>{
    return(
        <>
            <NavBar />
            <div>
                <div className="text-center bg-[#EEEAE2] py-5">
                    <h2 className="font-bold py-5 text-[#474747] text-3xl">نماذجنا المنزلية </h2>
                        <p className="text-center text-[#606060] mb-5"> 
اكتشف تصاميم منازلنا الجاهزة الأكثر شعبية، والتي تم تصميم كل منها باهتمام بالتفاصيل والاستدامة.                        </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-5 mx-auto justify-center items-center md:flex-row">
                <ProductCards />
            </div>
        </>
    )
}

export default ProductHouses
