import React from 'react'

let experience = () =>{
    return(
        <>
        <section class="experinece" style={{background:`url(${require('../../images/exp.jpg')})`, backgroundRepeat : 'no-repeat'}}>
        <div class="container">
            <div class="offset-md-5 offset-sm-4 col-md-7 col-sm-8">
                <h2>My Experience</h2>
                <h5>Following are my project experience.</h5>
                <ul>
                    <li>
                        <h3>Frontend Developer @ Zetaris</h3>
                        <h4>Mar 2021 - Current</h4>
                        <span></span>
                    </li>
                    <li>
                        <h3>Web Developer @ 1receipt</h3>
                        <h4>Feb 2020 - Aug 2020</h4>
                        <span></span>
                    </li>
                    <li>
                        <h3>React Native Developer @ 1receipt</h3>
                        <h4>Feb 2020 - Aug 2020</h4>
                        <span></span>
                    </li>
                    <li>
                        <h3>Backend project</h3>
                        <h4>Aug 2019 - Now</h4>
                        <span></span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
        </>
    )
}

export default experience