import React from 'react'

let Description = () => {
    return(
        <>
        <section class="services-sec">
        <div class="container">
            <h2>How Can I Help You</h2>
            <h5>With full prepared skills of both frontend and backend</h5>
            <div class="row">
                <div class="col-md-6 skill-item">
                    <span><i class="fas fa-desktop"></i> </span>
                    <h3>Web development</h3>
                    <h6>I have had experience of using bootstrap and implement its designing to React js project. Also I have adequate knowledge of React, including Hooks, Router, and implementing APIs</h6>
                </div>
                <div class="col-md-6 skill-item">
                    <span><i class="far fa-file-code"></i> </span>
                    <h3>Backend Development</h3>
                    <h6>Node js is one of my skill to set up backend programs, integrating with mongoDB. Also I had experience of .net MVC programming.</h6>
                </div>
                <div class="col-md-6 skill-item">
                    <span><i class="fas fa-cogs"></i> </span>
                    <h3>Html / CSS</h3>
                    <h6>This is the basic part of frontend I suppose. </h6>
                </div>
                <div class="col-md-6 skill-item">
                    <span><i class="far fa-paper-plane"></i> </span>
                    <h3>Mobile APP development</h3>
                    <h6>I have finished one mobile application development with React Native using expo.</h6>
                </div>
            </div>
            <span class="devider"></span>
            <span class="hdevider"></span>
        </div>
    </section>
        </>
    )
}

export default Description