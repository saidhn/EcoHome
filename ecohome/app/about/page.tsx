import { useTranslations } from 'next-intl';
import NavBar from "../Components/Navbar";
import OurValues from "./Components/Ourvalues";
import Story from "./Components/story";

const About = () => {
    const t = useTranslations('about');
    return (
        <>
            <NavBar />
            <section>
                <div className="text-center bg-[#EEEAE2] py-5">
                    <h2 className="font-bold py-5 text-[#474747] text-3xl">{t('title')}</h2>
                    <p className="text-center text-[#606060] px-3 mb-5">
                        {t('subtitle')}
                    </p>
                </div>

                <div>
                    <Story />
                    <OurValues />
                </div>
            </section>
        </>
    );
};

export default About;
