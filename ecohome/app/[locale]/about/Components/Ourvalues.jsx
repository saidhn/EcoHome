'use client';

import { useTranslations } from 'next-intl';
import { ValuseInformation } from "./values";

const OurValues = () => {
    const t = useTranslations('values');
    return (
        <div className="text-center bg-[#EEEAE2] py-5">
            <h2 className="font-bold py-5 text-[#474747] text-3xl">{t('title')}</h2>
            <p className="text-center text-[#606060] mb-5">
                {t('subtitle')}
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

                            <h3 className="font-bold text-[#474747] text-xl mb-2">{t(`items.${v.key}.title`)}</h3>

                            <p className="text-[#707070] text-sm leading-relaxed">{t(`items.${v.key}.description`)}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default OurValues;
