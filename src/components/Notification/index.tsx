import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleCheck,
    faXmark,
    faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons'
import * as S from './Notification.styles'
import { Notification } from './Notification.types'

export default ({ title, message, type }: Omit<Notification, 'id'>) => {
    return (
        <S.Container type={type}>
            {type === 'success' && (
                <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="lg"
                    color="var(--success)"
                />
            )}

            {type === 'error' && (
                <FontAwesomeIcon
                    icon={faXmarkCircle}
                    size="lg"
                    color="var(--error)"
                />
            )}

            <S.Content>
                <S.Title>{title}</S.Title>
                <S.Message>{message}</S.Message>
            </S.Content>

            <S.Close
                icon={faXmark}
                size="lg"
                onClick={() => console.log('Fechou')}
            />
        </S.Container>
    )
}
