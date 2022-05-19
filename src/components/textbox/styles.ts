import styled from "styled-components"

export const InputContainer = styled.form`
    position: relative;
    width: 500px;
    height: 50px;
    margin-bottom: 10px;

    .label-focus {
        top: -2px;
        left: 3px;
        font-size: 15px;
        line-height: 10px;
        color: #444444;
        padding: 3px;

        background-color: #DDDDDD;
        border-radius: 4px;
    }
`;

export const Label = styled.label`
    position: absolute;

    width: fit-content;
    height: fit-content;
    line-height: 40px;
    font-size: 20px;
    top: 5px;
    left: 5px;
    color: #777777;
    background-color: white;

    transition: all 100ms ease-in-out;
`;

export const Input = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid #CCCCCC;
    border-radius: 5px;

    transition: all 100ms ease-in-out;

    padding: 0 10px;

    width: 100%;
    height: 100%;
    font-size: 20px;
    

    :focus {
        border-bottom: 2px solid black;
        background-color: #DDDDDD;
    }
`;