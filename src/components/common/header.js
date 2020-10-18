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
                                <a href=""> <span class="fab fa-linkedin-in"></span></a>
                            </li>
                            <li>
                                <a href=""> <span class="fab fa-git"></span></a>
                            </li>
                        </ul>
                    </div>
                    {/* <img className='rocky' src={require('../../images/rocky.PNG')}/> */}
                    <a href="#" className="download-sec">Download Resume</a>

                <img className='profile-img' src={require('../../images/avatar.png')} alt="img" />

                </div>
            </header>
        </>
    )
}

export default Header