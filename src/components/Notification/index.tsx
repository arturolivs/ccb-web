import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleCheck,
    faXmark,
    faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons'
import { noop } from 'lodash'

import * as S from './Notification.styles'
import { Notification } from './Notification.types'

export default ({ id, title, message, type, onClose = noop }: Notification) => {
    return (
        <S.Notification type={type}>
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

            <S.Close icon={faXmark} size="lg" onClick={() => onClose(id)} />
        </S.Notification>
    )
}
