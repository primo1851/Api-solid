import { IMailProvider, IMessage } from "../IMailprovider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: 'f8d933eb01427d',
                pass: 'ae248fc58036c3'
            }
        })
    }


    async sendMail(message: IMessage): Promise<void> {

        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,

            },
            from: {
                name: message.from.name,
                address: message.from.email,

            },

            subject: message.subject,

            html: message.body,

        })

    }
}