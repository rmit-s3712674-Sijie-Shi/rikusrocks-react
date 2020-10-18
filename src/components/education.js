import React from "react";
let Education = () => {
    return(
        <>
        <section class="experinece education" style={{background:`url(${require('../images/education.jpg')})`, backgroundRepeat : 'no-repeat'}}>
        <div class="container">
            <div class=" col-md-7 col-sm-8">
                <h2>My Education</h2>
                <h5>Here are my education experinece.</h5>
                <ul>
                    <li>
                        <h3>Bachelor of Bioscience @ Sichuan University</h3>
                        <h4>Sep 2011 - Jul 2015</h4>
                        <span></span>
                    </li>
                    <li>
                        <h3>Master of Biotech @ University of Melbourne</h3>
                        <h4>Jul 2016 - Jul 2018</h4>
                        <span></span>
                    </li>
                    <li>
                        <h3>Master of IT @ RMIT</h3>
                        <h4>Jul 2018 - Jul 2020</h4>
                        <span></span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
        </>
    )
}

export default Education