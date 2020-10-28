import React from 'react'
import Header from './common/header'
import Banner from './common/banner'
let ProjectPage = () => {
    return(
        <>
        <Header/>
        <Banner/>
        <section class="portfolio-section ">
        <div class="main-container section-padding">
            <h2>Here are My Projects</h2>
            <div className='text'>1receipt website(with React js and Node js)</div>
            <div className='d'><a href={'https://safe-beach-67493.herokuapp.com/'}><img src={require('../images/project.png')}/></a></div>
            <ul>
                <li style={{ paddingTop:'20px'}}>
                <h3>*Please note that this project still in progress, it doesn't reflect the finnal result</h3>
                </li>
                <li style={{ paddingTop:'20px'}}>
                <h3>**For better experience, please login with username: leptin password: 000003</h3>
                </li>
            </ul>
            
            <div className='text'>Git repository of this website(with React js and Node js)</div>
            <div className='d'><a href={'https://github.com/rmit-s3712674-Sijie-Shi/nodePersonal'}><img src={require('../images/git.png')}></img></a></div>
            

        </div>
    </section>
        </>
    )
}

export default ProjectPage