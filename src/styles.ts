import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    min-width: 100vw;
    height: 100vh;
    min-height: 100vh;

    align-items: center;
`

export const TodoContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;

    width: 80%;
    height: 100%;
    gap: 10px;
`;