import styled from "styled-components";

export const SocialContainer = styled.div`
    cursor: pointer;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 5px;
    background-color: ${({theme}) => theme.tertiaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    &:hover > svg path {
        fill: ${({theme}) => theme.mainColor};
    }
`;

export const GenericButton = styled.button`
    z-index: 1;
    color: ${({theme}) => theme.textColor};
    background-color: transparent;
    padding: 0.5rem 1rem;
    outline: none;
    border: solid 1px ${({theme}) => theme.mainColor};
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 6px ${({ theme }) => theme.mainColor};
    }
    &:disabled {
        cursor: wait;
        box-shadow: 0px 0px 2px ${({ theme }) => theme.mainColor};
    }
    &:focus {
        box-shadow: 0px 0px 6px ${({ theme }) => theme.mainColor};
    }
`;

export const GenericInput = styled.input`
    padding: 5px;
    background: ${({theme}) => theme.secondaryColor};
    border: solid 1px ${({theme}) => theme.mainColor};
    outline: none;
    caret-color: ${({theme}) => theme.textColor};
    color: ${({theme}) => theme.textColor};
    &:hover, &:focus {
        box-shadow: 0px 0px 6px ${({ theme }) => theme.mainColor};
    }
`;

export const GenericTextArea = styled.textarea`
    padding: 5px;
    background: ${({theme}) => theme.secondaryColor};
    border: solid 1px ${({theme}) => theme.mainColor};
    outline: none;
    caret-color: ${({theme}) => theme.textColor};
    color: ${({theme}) => theme.textColor};
    resize: none;
    &:hover, &:focus {
        box-shadow: 0px 0px 6px ${({ theme }) => theme.mainColor};
    }
`;
