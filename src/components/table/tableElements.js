import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fit, 1fr);
    width:50%;
    height:fit-content;
    align-content:center;
    margin-bottom: 10%;
`

export const Row = styled.div`
    grid-column:1/4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    cursor: ${props => props.data ? 'pointer' : 'default'};
    transition: 0.5s all;c

    &:hover {
        transition: 0.5s all;
        transform: ${props => props.data ? 'scale(1.1)' : undefined}
    }
`

export const Column = styled.span`
    display: flex;
    border:1px solid #fff;
    font-size: ${props => props.header ? '24px' : '18px'};
    color: ${props => props.header ? '#282c34' : '#fff'};
    justify-content: center;
    background: ${props => props.header ? '#C4C4C4 !important' : undefined};
`