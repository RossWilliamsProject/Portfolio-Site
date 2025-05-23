import "./AboutContentStyles.css";
import jasmine from "../../Assets/About/Jasmine_v2.jpg";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>
                    Hello! I'm Jasmine.

                    (TO UPDATE)
                </h1>
                <p>
                    I'm a 3D artist and Animation graduate from Nottingham Trent University, where I earned a 2:1 in my degree.
                    During my time at university, I developed a strong passion for three-dimensional modelling and environment/asset creation — areas I continue to be deeply excited about!
                    I'm also passionate about the theory and principles behind animation, which I explored in-depth during my studies.
                    Now based near London, I’m actively seeking my first role in the creative industry to grow my skills and contribute to imaginative, high-quality projects.
                </p>
                <p>
                    Since graduating, personal circumstances meant I had to pause my pursuit of a graduate role.
                    During this time, I have continued developing my skills through independent projects and practice - all of which you can see in action on my Projects page.
                    Through university and these independent I've become familar with many different software tools - such as Maya, Substance Painter, ZBrush, Blender and Photoshop, all of which you can see in action on my Projects page.
                </p>
                <p>
                    When I’m not working on 3D modelling, you’ll usually find me drawing, lifting weights at the gym, or working as the assistant manager at my local cafe.
                </p>
            </div>
            <div className="right">
                <div>
                    <img src={jasmine} alt="jasmine" className="image" />
                </div>
            </div>
        </div>
    )
}

export default AboutContent