import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export const sendEmail = async ({
    nom,
    email,
    time,
    message,
}: {
    nom: string,
    email: string,
    time: string,
    message: string,
}) => {

    try {

        if (!process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY) {
            return 'error';
        }

        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
            {
                nom,
                email,
                time,
                message,
            },
            {
                publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
            }
        )

        if (response.status === 200) {
            return 'success';
        } else {
            return 'error';
        }
    } catch (error) {
        if (error instanceof EmailJSResponseStatus) {
            return 'error';
        }
    }
}