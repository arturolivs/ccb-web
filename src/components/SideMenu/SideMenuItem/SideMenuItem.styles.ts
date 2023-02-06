import styled from 'styled-components'

export const SideMenuItem = styled.li`
    display: flex;
    align-items: center;
    column-gap: 5px;

    width: 100%;
    height: 4rem;
    color: var(--primary-color-light-4);
    list-style: none;
    padding-left: 1rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s;

    &[aria-selected='true'],
    &:hover {
        background: var(--gray-0);
        color: var(--primary-color-dark-1);

        div::after {
            content: '';
            position: absolute;
            right: 0;
            bottom: -50px;
            width: 50px;
            height: 50px;
            background: transparent;
            border-radius: 50%;
            box-shadow: 35px -35px 0 10px var(--white);
            pointer-events: none;
        }
    }
`

export const IconContainer = styled.span``

export const Label = styled.span``
