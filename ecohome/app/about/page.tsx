import NavBar from "../Components/Navbar";
import OurValues from "./Components/Ourvalues";
import Story from "./Components/story";

const About = () => {
    return (
        <>
            <NavBar />
            <section>
                <div className="text-center bg-[#EEEAE2] py-5">
                    <h2 className="font-bold py-5 text-[#474747] text-3xl"> معلومات عنا </h2>
                    <p className="text-center text-[#606060] mb-5">
                        نحن رواد مستقبل المعيشة المستدامة من خلال تصميم وبناء المنازل الجاهزة المبتكرة.
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
