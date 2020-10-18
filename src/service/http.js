import axios from 'axios'
export default class Http {
    async sendEmail(name, email, message){
        let data = {
            name: name,
            email: email,
         
            message: message
        }
        let options = {
            method: 'POST',
            data: data,
            url: 'http://localhost:3005/email'
        }
        try {
            await axios(options)
            return 'Email has been sent'
        } catch (error) {
            return 'Email failed to send'
        }
    }
}