import styled from 'styled-components';

export const TodoContainer = styled.div`
    display: flex;
    border: 1px solid black;
    width: 100%;
    height: 30px;
    border-radius: 3px;
    font-size: 15px;
    line-height: 25px;
    justify-self: center;
    align-self: center;
`;

export const StyledTodo = styled.input`
    border: none;
    outline: none;
    user-select: none;

    padding-left: 15px;
    flex-grow: 1;

    :disabled{
        color: black;
    }
`;

export const TodoButton = styled.button`

`;