
import NavBar from "../Components/Navbar"
import ProductCards from "./Components/ProjectCards"
import { useTranslations } from 'next-intl';

const ProductHouses = () => {
    const t = useTranslations('projects');
    return (
        <>
            <NavBar />
            <div>
                <div className="text-center bg-[#EEEAE2] py-5">
                    <h2 className="font-bold py-5 text-[#474747] text-3xl">{t('title')}</h2>
                    <p className="text-center text-[#606060] mb-5">
                        {t('subtitle')}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-5 mx-auto justify-center items-center md:flex-row">
                <ProductCards />
            </div>
        </>
    )
}

export default ProductHouses
