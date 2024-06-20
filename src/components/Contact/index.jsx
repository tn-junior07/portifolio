import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { Snackbar } from '@mui/material';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
`;

const Title = styled.h2`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.p`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ContactForm = styled.form`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.card};
    padding: 32px;
    border-radius: 16px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    margin-top: 28px;
    gap: 12px;
`;

const ContactTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
        border-color: ${({ theme }) => theme.primary};
    }
`;

const ContactInputMessage = styled.textarea`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
        border-color: ${({ theme }) => theme.primary};
    }
`;

const ContactButton = styled.button`
    width: 100%;
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    padding: 13px 16px;
    margin-top: 2px;
    border-radius: 12px;
    cursor: ${({ sending }) => (sending ? 'not-allowed' : 'pointer')};
    border: none;
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
    :hover {
        transform: ${({ sending }) => (sending ? 'none' : 'translateY(-2px)')};
    }
    :active {
        transform: ${({ sending }) => (sending ? 'none' : 'translateY(0)')};
    }
`;

const Contact = () => {
    const [open, setOpen] = useState(false);
    const [sending, setSending] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (sending) return;

        setSending(true);

        emailjs.sendForm('service_ryphb0u', 'template_b7o78b9', form.current, 'sQJ2RXzxgtbEI4jED')
            .then(() => {
                setOpen(true);
                form.current.reset();
            })
            .catch((error) => {
                console.error('Erro ao enviar o formulário:', error);
                alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
            })
            .finally(() => {
                setSending(false);
            });
    };

    return (
        <Container>
            <Wrapper>
                <Title>Contact</Title>
                <Desc>Sinta-se livre para entrar em contato!</Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput placeholder="Your Email" name="from_email" type="email" required />
                    <ContactInput placeholder="Your Name" name="from_name" required />
                    <ContactInput placeholder="Subject" name="subject" required />
                    <ContactInputMessage placeholder="Message" rows="4" name="message" required />
                    <ContactButton type="submit" sending={sending}>Send</ContactButton>
                </ContactForm>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Email sent successfully!"
                />
            </Wrapper>
        </Container>
    );
};

export default Contact;
