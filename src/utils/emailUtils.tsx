import { Resend } from 'resend';

export const sendEmail = async ({
    from,
    to,
    subject,
    html,
}: {
    from: string,
    to: string,
    subject: string,
    html: string,
}) => {
    try {
        const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
            from,
            to,
            subject,
            html,
        });

        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

