import Link from "next/link"

const ProductCards = ()=>{
    return(
        <div className="max-w-sm  bg-white hover:scale-105 transition-all duration-150 hover:shadow-md shadow-sm border mb-5 mt-10 border-gray-200 rounded-lg shadow-sm bg-[#FFFFFF] border-[#FFFFFF]">
            <img className="rounded-t-lg" src="/product-1.jpg" />
            <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#474747]">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-[#474747]">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <Link href="/models" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default ProductCards