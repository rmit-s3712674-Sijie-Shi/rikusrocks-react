import React from 'react'
import { Link } from 'react-router-dom'
let Banner = (props) => {
    return (
        <>
            <div class="banner-sec">
                <div class="container">
                    <div class="menu-bar">
                        <ul>
                            <li>
                            <Link
                                to={{
                                    pathname:'/'
                                }}
                                >About</Link>
                            </li>
                            <li>
                            <Link
                                to={{
                                    pathname:'/project'
                                }}
                                >Project</Link>
                            </li>
                            <li>
                                <Link
                                to={{
                                    pathname:'/education'
                                }}
                                >Education</Link>
                            </li>
                            <li>
                            <Link
                                to={{
                                    pathname:'/contact'
                                }}
                                >Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {props.children}

                    <span className="devider" ></span>
                </div>
            </div>
        </>
    )
}

export default Banner