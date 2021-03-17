import React from 'react'

let Header = () => {
    return (
        <>
            <header>
                <div class="container">
                    <div className ='singnature'>
                        <img src={require('../../images/signature.png')}/>
                    </div>
                    <div class="share-sec">
                        <ul>
                            <li>
                                <a href="https://space.bilibili.com/165825" style={{  }}> <img src={require('../../images/bilibili.png')}></img></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/sijie-shi-73aa2313a/"> <span class="fab fa-linkedin-in"></span></a>
                            </li>
                            <li>
                                <a href="https://github.com/rmit-s3712674-Sijie-Shi"> <span class="fab fa-git"></span></a>
                            </li>
                        </ul>
                    </div>
                    {/* <img className='rocky' src={require('../../images/rocky.PNG')}/> */}
                    <a href="https://tinyurl.com/jkmu4n92" className="download-sec">Check my Resume</a>

                <img className='profile-img' src={require('../../images/avatar.png')} alt="img" />

                </div>
            </header>
        </>
    )
}

export default Header