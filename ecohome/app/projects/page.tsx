
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
                            اكتشف مجموعتنا من المنازل الجاهزة، والتي تم تصميم كل منها مع  وضع الحياة العصرية والاستدامة في الاعتبار.
                        </p>
                </div>
            </div>

            <div className="flex flex-wrap  gap-3 mx-auto justify-center md:flex-row">
                <ProductCards />
            </div>
        </>
    )
}

export default ProductHouses