import styled from 'styled-components'

export const SearchableTextInput = styled.input`
    width: ${props => props.width};
    border: none;
    border-bottom: 2px solid #fff;
    background:transparent;
    font-size: 24px;
    margin:5%;
    color:#fff;

    &:focus {
        border: none;
        border-bottom: 2px solid #fff;
    }
`