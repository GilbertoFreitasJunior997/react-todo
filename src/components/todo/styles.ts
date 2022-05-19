import styled from 'styled-components';

export const deleteTimer = 250;

export const AnimContainer = styled.div`
    @keyframes del {
        from{
            transform: scale(1);
            opacity: 1;
        };
        10% {
            transform: scale(1.1);
        };
        to{
            transform: scale(0.3);
            opacity: 0;
        }
    }

    .delete {
        animation: del ${deleteTimer}ms ease-in-out;
    }
`;

export const TodoContainer = styled.div`
    display: flex;
    border: none;
    width: 100%;
    height: 40px;
    border-radius: 3px;
    font-size: 15px;
    line-height: 25px;
    justify-self: center;
    align-self: center;
    margin: 3px;

    position: relative;
`;

export const StyledTodo = styled.input`
    border: none;
    outline: none;
    user-select: none;

    padding-left: 15px;
    flex-grow: 1;

    background-color: #BBB;
    border-radius: 4px;
    box-shadow: 2px 1px 5px 0px rgba(255, 255, 255, 0.5);

    :disabled{
        color: black;
    }
`;

export const ButtonsContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 5px;
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
`;

export const TodoButton = styled.button<{
    bgColor: string;
}>`
    width: 50%;
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 10px;
    border-radius: 50%;
    border: none;

    cursor: pointer;
    background-color: ${p => p.bgColor};
    color: white;
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.6);

    transition: all 100ms ease-in-out;

    :hover {
        transform: scale(1.1);
    }

    :active{
        transform: scale(1.2);
    }
`;
