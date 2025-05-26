import "./AboutContentStyles.css";
import jasmine from "../../Assets/About/Jasmine_v2.jpg";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>
                    Hello! I'm Jasmine.
                </h1>
                <p>
                    I'm a 3D artist and Animation graduate from Nottingham Trent University, where I earned a 2:1 in my degree.
                    During my time at university I explored various roles in the industry, but I developed a strong passion for three-dimensional modelling.
                    I'm also passionate about the theory and principles behind animation, which I explored in-depth during my studies.
                    Now based near London, I’m actively seeking my first role in the creative industry to grow my skills and contribute to some exciting projects.
                </p>
                <p>
                    Since graduating, personal circumstances meant I had to pause my pursuit of a graduate role.
                    However, during this time, I have still continued developing my skills through independent projects and practice - most recently completing a 3D modelling project in Blender
                    (which can be seen on my Projects page with my other work).
                    Through university and these independent projects I've become familar with a large variety of software tools - such as Maya, Substance Painter, ZBrush, Blender and Photoshop.
                    Its worth noting that this list is continuing to grow, as I have recently starting self-learning Houdini.
                    </p>
                <p>
                    In my spare time, when I’m not working on my portfolio or something else creative, you’ll find me at the gym, at the local vegan cafe where I work, or hanging out with my cats!               
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