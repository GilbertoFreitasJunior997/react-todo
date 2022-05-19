import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    min-width: 100vw;
    height: 100vh;
    min-height: 100vh;

    background: linear-gradient(
        to top right,
        #E89F38,
        #EB36D1
    );

    align-items: center;
`

export const TodoContainer = styled.div`
    background-color: rgb(27, 23, 23);
    padding: 25px;
    border-radius: 10px;

    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;

    width: 80%;
    height: fit-content;
    max-height: 70vh;
    overflow-y: auto;
    gap: 10px;
`;

export const SearchContainer = styled.div`
    background-color: rgb(27, 23, 23);
    padding: 30px 60px;
    border-radius: 15px;
    margin: 20px;

    box-shadow: 0px 4px 10px 0px black;
`;

export const NoDataText = styled.span`
    color: white;
    width: fit-content;
    font-size: 20px;
    line-height: 30px;
    user-select: none;

    transition: all 100ms ease-in-out;
    cursor: pointer;

    :hover {
        transform: scale(1.1);
    }

    :active {
        transform: scale(1.2);
    }
`;
