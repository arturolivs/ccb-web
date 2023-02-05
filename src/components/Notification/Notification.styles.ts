import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { fade } from '../../theme/globalStyles'
import { DISPLAY_TIME } from './Notification.constant'
import { NotificationType } from './Notification.types'

interface ContainerProp {
    type: NotificationType
}

export const Notifications = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    row-gap: 0.5rem;
`

export const Notification = styled.div<ContainerProp>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
    min-width: 20rem;
    padding: 1rem 0.5rem;
    background-color: var(--gray-0);
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
    transition: all 0.5s;

    opacity: 0;
    animation: ${fade} ease-in-out ${DISPLAY_TIME}s;
    animation-fill-mode: forwards;

    svg:first-child {
        padding: 1rem;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0.5rem;
        height: 100%;

        background-color: ${({ type }) =>
            (type === 'success' ? 'var(--success)' : null) ??
            (type === 'error' ? 'var(--error)' : null)};
    }
`

export const Content = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 0.5rem;
`

export const Title = styled.h1`
    font-size: larger;
    color: var(--primary-color-dark-3);
    font-weight: 700;
`

export const Message = styled.span`
    color: var(--gray-6);
`
export const Close = styled(FontAwesomeIcon)`
    margin: 0 1rem;
    align-self: flex-start;
    cursor: pointer;
`
