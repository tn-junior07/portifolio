import styled from "styled-components";

export const GenericButton = styled.button`
    z-index: 1;
    color: ${({theme}) => theme.textColor};
    background-color: transparent;
    padding: 0.5rem 1rem;
    outline: none;
    border: solid 1px ${({theme}) => theme.primaryColor};
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 6px ${({ theme }) => theme.primaryColor};
    }
    &:disabled {
        cursor: wait;
        box-shadow: 0px 0px 2px ${({ theme }) => theme.primaryColor};
    }
    &:focus {
        box-shadow: 0px 0px 6px ${({ theme }) => theme.primaryColor};
    }
`;

export const GenericInput = styled.input`
    padding: 5px;
    background: black;
    border: solid 1px green;
    outline: none;
    caret-color: ${({theme}) => theme.textColor};
    color: ${({theme}) => theme.textColor};
    box-shadow: 0px 4px 4px rgba(61, 61, 61, 0.25);
    &:hover, &:focus {
        box-shadow: 0px 0px 6px green;
    }
`;

export const GenericTextArea = styled.textarea`
    padding: 5px;
    background: black;
    border: solid 1px green;
    outline: none;
    caret-color: ${({theme}) => theme.textColor};
    color: ${({theme}) => theme.textColor};
    resize: none;
    box-shadow: 0px 4px 4px rgba(61, 61, 61, 0.25);
    &:hover, &:focus {
        box-shadow: 0px 0px 6px green;
    }
`;
