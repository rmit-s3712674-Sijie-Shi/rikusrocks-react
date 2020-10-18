import React from 'react'
let Banner = (props) => {
    return (
        <>
            <div class="banner-sec">
                <div class="container">
                    <div class="menu-bar">
                        <ul>
                            <li class="active">
                                <a href="blog-single.html">About </a>
                            </li>
                            <li>
                                <a href="portipolio.html">projects</a>
                            </li>
                            <li>
                                <a href="education.html">education</a>
                            </li>
                            <li>
                                <a href="#contact-sec">contact</a>
                            </li>
                        </ul>
                    </div>

                    {props.children}

                    <span class="devider"></span>
                </div>
            </div>
        </>
    )
}

export default Banner