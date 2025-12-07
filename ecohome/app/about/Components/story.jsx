const Story = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-8 my-10">
            <div className="w-full md:w-1/2  p-8 space-y-4">
                <h3 className="font-bold text-[#C09059] text-3xl mb-4 border-b-2 border-[#C09059] inline-block pb-2">
                    قصتنا
                </h3>

                <div className="space-y-4 text-[#474747] leading-relaxed text-lg">
                    <p>
                        تأسست شركة <span className="font-semibold text-[#C09059]">ReframeBuilds</span> في عام 2015، انطلاقاً
                        من اعتقاد بسيط: يستحق الجميع منزلًا جميلًا ومستدامًا دون أوقات بناء طويلة وتكاليف باهظة للبناء
                        التقليدي.
                    </p>
                    <p>
                        رأى مؤسسونا، وهم فريق من المهندسين المعماريين ومهندسي البيئة، فرصةً لإحداث ثورة في بناء المنازل
                        من خلال التصنيع المسبق. ومن خلال الجمع بين تقنيات التصنيع المتطورة ومبادئ التصميم الخالدة، وضعنا
                        معيارًا جديدًا للحياة المستدامة.
                    </p>
                    <p>
                        اليوم، سلّمنا أكثر من <span className="font-semibold text-[#C09059]">1000 منزل</span> في جميع
                        أنحاء البلاد، وكل منها دليل على التزامنا بالجودة والاستدامة ورضا عملائنا. يستخدم مصنعنا الطاقة
                        المتجددة والمواد الصديقة للبيئة، مما يضمن مساهمة كل منزل نبنيه في كوكب أكثر صحة.
                    </p>
                </div>
            </div>

            <div className="w-full p-3 md:w-1/2 flex justify-center">
                <img
                    src="/about.jpg"
                    alt="عن EcoHomes"
                    className="w-full h-auto max-w-md rounded-2xl shadow-lg border border-[#E5E5E5] object-cover"
                />
            </div>
        </div>
    );
};
export default Story;
