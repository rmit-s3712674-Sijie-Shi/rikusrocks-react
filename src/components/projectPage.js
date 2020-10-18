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
            <h2>Here is My Project</h2>

            <a className='project' href={'https://safe-beach-67493.herokuapp.com/'}><img src={require('../images/project.png')}/></a>
            <ul>
                <li style={{ paddingTop:'20px'}}>
                <h3>*Notice that this project still under process, it doesn't reflect the finnal result</h3>
                </li>
                <li style={{ paddingTop:'20px'}}>
                <h3>**For better experience, please login with username: leptin password: 000003</h3>
                </li>
            </ul>
            
            

        </div>
    </section>
        </>
    )
}

export default ProjectPage