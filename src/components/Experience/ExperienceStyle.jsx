import styled from 'styled-components';

// Container de tela de experiências
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0 80px;
    position: relative;
    z-index: 1;
    background-color: ${({ theme }) => theme.background};
    @media (max-width: 960px) {
        padding: 0;
    }
`;

// Wrapper de tela de experiências
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        padding: 40px 0;
    }
`;

// Título de tela de experiências
export const Title = styled.h2`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

// Descrição de tela de experiências
export const Desc = styled.p`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

// Seção de linha do tempo
export const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: flex-end;
    }
`;
