import React from "react";
import Header from './common/header'
import Banner from './common/banner'
import Skill from './skill'
import Description from "./description";



let Index = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <Banner><h2>Helo I am Sijie Shi, 27 years old developer from Melbourne, Australia.</h2></Banner>
            <Skill/>
            <Description/>
        </>
    )
}

export default Index