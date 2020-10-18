import React from "react";
import Header from './common/header'
import Banner from './common/banner'
import Skill from './skill'
import Description from "./description";
import Experience from "./experience";
import Education from "./education";



let Index = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <Banner><h2>Hello I am Sijie Shi, 27 years old developer from Melbourne, Australia.</h2></Banner>
            <Skill/>
            <Description/>
            <Experience/>
            <Education/>
        </>
    )
}

export default Index