import "./OverviewStyles.css";
import covid from "../../Assets/covid.jpg";
import React from 'react';

const PortfolioOverview = () => {
    return (
        <div className="overview">
            <div className="left">
                <h1>
                    PortfolioOverview 
                </h1>
                <p>
                    Written in R, Blah bblah blah balha. Blah bblah blah balha. Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.Blah bblah blah balha.Blah bblah blah balha.
                    Blah bblah blah balha.  
                </p>
                <p>
                    "What a strange combo!" - I believe that data and UI have loads in common,
                    both have a fundemental foundation of comprehension and understanding.
                    In data - that understanding is recognising the story the data tells,
                    and in UI/UX the skill is allowing users to follow their own story and interact
                    with the data in a specific way - afterall,
                    interface design without data is not a functional system!
                </p>
                <p>
                    After undertaking a few large projects using Javascript and React
                    (such as my dissertation, and personal portfolio website),
                    I've decided to branch out and learn more about the field of data science
                    - with modules at university in R under my belt already, I've been brushing up on my Python skills,
                    and learning more about machine learning.
                </p>
            </div>
            <div className="right">
                <div>
                    <img src={covid} alt="covid" className="img" />
                </div>
            </div>
        </div>
    )
}

export default PortfolioOverview