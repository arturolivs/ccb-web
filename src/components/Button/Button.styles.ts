import styled from 'styled-components'

export default styled.button`
    cursor: pointer;
    width: 100%;
    height: 2.5rem;
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
    padding: 0.375rem 0;

    background-color: var(--primary-color-light-1);
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    transition: all 0.5s;

    &:hover {
        background-color: var(--primary-color);
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    }

    &:active {
        background-color: var(--primary-color-light-2);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    }
`
