import twilio from 'twilio';
import { BadRequestError } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';

const sendMessage = async (req, res) => {
    const {phone, textMsg} = req.body;    
 
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

    const message = await client.messages.create({
        body: textMsg,
        from: process.env.PHONE_NUMBER_SENDER,
        to: phone
    })

    if(!message){
        throw new BadRequestError('Message not sent')
    }
        
    res.status(StatusCodes.OK).json({ msg: 'Message sent successfully' });
}

export {
    sendMessage
}