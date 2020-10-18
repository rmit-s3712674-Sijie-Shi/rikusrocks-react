import React from 'react'

let Skill = () => {
    return(
        <>
        <section class="skills-sec" style={{background:`url(${require('../images/skills.jpg')})`}}>
        <div class="container">
            <h2>My Skills & Abilities</h2>
            <h5>These are some of my main skills of programming. As a junior developer, I have had experience of developing both frontend and backend projects.</h5>
            <ul class="skills-set">
                <li class="indvidual-skill">
                    <div class="skill_title">
                        <span>React js - 1 year experience</span>
                    </div>
                    <div class="barfiller">
                        <span class="fill" style={{width:'90%'}}></span>
                    </div>
                </li>
                <li class="indvidual-skill">
                    <div class="skill_title">
                        <span>Node js and Express - 1 Year Experience</span>
                    </div>
                    <div class="barfiller">
                        <span class="fill" style={{width:'80%'}}></span>
                    </div>
                </li>
                <li class="indvidual-skill">
                    <div class="skill_title">
                        <span>Html / CSS - 1+ Years Experience</span>
                    </div>
                    <div class="barfiller">
                        <span class="fill" style={{width:'70%'}}></span>
                    </div>
                </li>
                <li class="indvidual-skill">
                    <div class="skill_title">
                        <span>Javascrpt - 1+ Years Experience</span>
                    </div>
                    <div class="barfiller">
                        <span class="fill" style={{width:'85%'}}></span>
                    </div>
                </li>
                <li class="indvidual-skill">
                    <div class="skill_title">
                        <span>React Native - 1 Year Experience</span>
                    </div>
                    <div class="barfiller">
                        <span class="fill" style={{width:'85%'}}></span>
                    </div>
                </li>
            </ul>
        </div>
    </section>

        </>
    )
}

export default Skill