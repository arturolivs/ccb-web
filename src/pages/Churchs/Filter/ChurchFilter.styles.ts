import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: var(--gray-0);
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`

export const InputLabel = styled.label`
    &:focus-within span {
        font-weight: bold;
        color: var(--primary-color-high-light);
    }
`

export const LabelText = styled.span`
    color: var(--gray-6);
    transition: all 0.3s;
`

export const Input = styled.input`
    width: 100%;
    padding: 15px 10px;
    background: var(--primary-color-light-4);
    color: var(--gray-6);

    border: 1px solid #d7e5f4;
    box-sizing: border-box;
    border-radius: 8px;

    font-size: 14px;
    letter-spacing: 0.04rem;
    transition: all 0.3s;

    &:focus {
        outline: none;
        border: 1px solid var(--primary-color-high-light);
    }
`

export const Button = styled.input`
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
