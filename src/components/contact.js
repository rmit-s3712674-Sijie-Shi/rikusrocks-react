import React, { useState } from "react"
import Header from './common/header'
import Banner from './common/banner'
import { event } from "jquery"
import Http from '../service/http'
import Alert from './common/alert'
import Drawer from 'react-drag-drawer'

let Contact = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [text, setText] = React.useState('Email sent')
    const [open, setOpen] = React.useState(false)
    const [stat, setStat] =React.useState("Submit")
    const sendEmail = async (name, email, message) => {
        let http = new Http
        let response = await http.sendEmail(name, email, message)
        setText(response)
        setOpen(true)
    }
    return (
        <>
            <Header />
            <Banner />
            <section class="portfolio-section ">
                <div class="main-container section-padding">
                <div class="form">
                        <h3>Get in Touch With Me</h3>
                        <form>
                            <ul class="row">
                                <li class="col-md-6">
                                    <input type="text" placeholder="Your Name" onChange={(e) =>{ setName(e.target.value) }} required/>
                                </li>
                                <li class="col-md-6">
                                    <input type="email" placeholder="Your Email Address" onChange={(e) => { setEmail(e.target.value) }} required/>
                                </li>
                                <li class="col-md-12">
                                    <textarea placeholder="Your Message" onChange={(e) => { setMessage(e.target.value) }}></textarea>
                                </li>
                                <li class="col-md-12">
                                    <button type="button" class="btn "onClick={
                                       async () => {
                                        setStat('Sending...')    
                                         await sendEmail(name, email, message)
                                       }}>{stat}</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
            <Drawer open={open}>
            <Alert text={text} />
            </Drawer>
            
        </>
    )
}

export default Contact