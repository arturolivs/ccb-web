import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import * as S from './Notification.styles'

const Notification = () => {
    return (
        <S.Container>
            <FontAwesomeIcon
                icon={faCircleCheck}
                size="lg"
                color="var(--success)"
            />

            <S.Content>
                <S.Title>Info</S.Title>
                <S.Message>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                </S.Message>
            </S.Content>

            <S.Close
                icon={faXmark}
                size="lg"
                onClick={() => console.log('Fechou')}
            />
        </S.Container>
    )
}

export default Notification
