import React from "react";
import Header from './common/header'
import Banner from './common/banner'
import Skill from './common/skill'
import Description from "./common/description";
import Experience from "./common/experience";
import Education from "./common/education";



let Index = () => {
    return (
        <>
            <div>
                <Header />
                
            </div>
            
            <Banner><h2>Hello I am Sijie Shi, a 27 years old developer from Melbourne, Australia.</h2></Banner>
            <Skill/>
            <Description/>
            <Experience/>
            <Education/>
        </>
    )
}

export default Index