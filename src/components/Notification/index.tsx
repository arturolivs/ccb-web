import React from 'react'

import * as S from './Notification.styles'

const Notification = () => {
    return (
        <S.Container>
            <S.MinBox>i</S.MinBox>
            <S.Content>
                <S.Title>Info</S.Title>
                <S.Message>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                </S.Message>
            </S.Content>

            <S.MinBox>X</S.MinBox>
        </S.Container>
    )
}

export default Notification
