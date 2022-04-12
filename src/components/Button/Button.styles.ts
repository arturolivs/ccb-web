import styled from 'styled-components'

export default styled.input`
    width: 200px;
    padding: 6px 0;
    font-size: 14px;
    letter-spacing: 0.05rem;
    cursor: pointer;
    background-color: var(--primary-color-light-1);
    color: #fff;
    border: 0;
    border-radius: 4px;
    transition: all 0.5s;

    &:hover {
        background-color: var(--primary-color);
        font-weight: bold;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    &:active {
        letter-spacing: 0.07rem;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
`
