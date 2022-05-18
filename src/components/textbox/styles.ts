import styled from "styled-components"

export const InputContainer = styled.form`
    position: relative;
    width: 300px;
    height: 30px;

    .label-focus {
        top: -2px;
        left: 3px;
        font-size: 12px;
        line-height: 12px;
        color: #444444;
    }
`;

export const Label = styled.label`
    position: absolute;

    width: fit-content;
    height: 100%;
    line-height: 15px;
    font-size: 15px;
    top: 5px;
    left: 5px;
    color: #777777;

    transition: all 100ms ease-in-out;
`;

export const Input = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid #CCCCCC;

    transition: all 100ms ease-in-out;

    padding: 0 10px;

    width: 100%;
    height: 100%;

    :focus {
        border-bottom: 2px solid black;
        background-color: #DDDDDD;
    }
`;