'use client';

import { useTranslations } from 'next-intl';
import Footer from "../Components/footer"
import NavBar from "../Components/Navbar"
import { ServiceInformation } from "./Components/servicedb"


import { useLocale } from 'next-intl';

const Service = () => {
    const t = useTranslations('services');
    const locale = useLocale();
    const isRTL = locale === 'ar';
    const alignClass = isRTL ? 'text-right' : 'text-left';

    return (
        <>
            <NavBar />
            <div>
                <div className="text-center bg-[#EEEAE2] py-5">
                    <h2 className={`font-bold py-5 text-[#474747] text-3xl`}>{t('title')}</h2>
                    <p className={`text-[#606060] mb-5`}>{t('subtitle')}</p>
                </div>
            </div>
            <div className="flex justify-center flex-wrap gap-2 p-6">
                {ServiceInformation.map((s) => {
                    const Icon = s.icon;
                    return (
                        <div
                            key={s.id}
                            className={`bg-[#FFFFFF] hover:shadow-lg space-y-4 py-5 rounded-md shadow-md flex flex-col p-4 w-[400px] ${alignClass}`}
                        >
                            <div className="rounded-full w-16 h-16 bg-[#F9F8F6] mx-auto flex items-center justify-center">
                                <Icon className="text-[#C09059]" size={30} />
                            </div>

                            <h3 className={`font-bold text-[#4A4A4A] text-xl mt-3 ${alignClass}`}>{t(`items.${s.key}.name`)}</h3>

                            <p className={`font-light text-[#707070] mt-2 ${alignClass}`}>{t(`items.${s.key}.description`)}</p>

                            <ul className={`font-light text-[#707070] space-y-1 mt-2 ${alignClass}`}>
                                {t.raw(`items.${s.key}.list`).map((item: string, index: number) => (
                                    <li key={index} className={alignClass}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
            <Footer />
        </>
    );
};

export default Service;