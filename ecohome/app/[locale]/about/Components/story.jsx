'use client';

import { useTranslations } from 'next-intl';

const Story = () => {
    const t = useTranslations('story');
    
    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-8 my-10">
            <div className="w-full md:w-1/2  p-8 space-y-4">
                <h3 className="font-bold text-[#C09059] text-3xl mb-4 border-b-2 border-[#C09059] inline-block pb-2">
                    {t('heading')}
                </h3>

                <div className="space-y-4 text-[#474747] leading-relaxed text-lg">
                    <p>
                        {t('paragraph1')}
                    </p>
                    <p>
                        {t('paragraph2')}
                    </p>
                    <p>
                        {t('paragraph3')}
                    </p>
                    <p>
                        {t('paragraph4')}
                    </p>

                    <p>
                        {t('paragraph5')}
                    </p>

                    <p>
                        {t('paragraph6')}
                    </p>

                    <h3 className="font-bold">
                        {t('section1_title')}
                    </h3>
                    <p>
                        {t('section1_content')}
                    </p>

                    <h3 className="font-bold">
                        {t('section2_title')}
                    </h3>
                    <p>
                        {t('section2_content')}
                    </p>

                    <h3 className="font-bold">
                        {t('section3_title')}
                    </h3>
                    <p>
                        {t('section3_content')}
                    </p>

                    <h3 className="font-bold">
                        {t('section4_title')}
                    </h3>
                    <p>
                        {t('section4_content')}
                    </p>

                    <h3 className="font-bold">
                        {t('section5_title')}
                    </h3>
                    <p>
                        {t('section5_content')}
                    </p>

                    <h3 className="font-bold">
                        {t('section6_title')}
                    </h3>
                    <p>
                        {t('section6_intro')}
                    </p>
                    <ul className="list-disc">
                        {t.raw('section6_list').map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h3 className="font-bold">{t('conclusion_title')}</h3>
                    <p>
                        {t('conclusion_content')}
                    </p>

                    <h3 className="font-bold">{t('essence_title')}</h3>
                    <p>
                        {t('essence_content')}
                    </p>
                </div>
            </div>

            <div className="w-full p-3 md:w-1/2 flex justify-center">
                <img
                    src="/about.jpg"
                    alt={t('image_alt')}
                    className="w-full h-82 max-w-md rounded-2xl shadow-lg border border-[#E5E5E5] object-cover"
                />
            </div>
        </div>
    );
};
export default Story;
