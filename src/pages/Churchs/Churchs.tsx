import React from 'react'

import ChurchList from './List'

import * as S from './Churchs.styles'
import { useNotification } from '../../hooks/useNotifications'

const Churths = () => {
    const { showSuccess, showError } = useNotification()
    return (
        <S.Churths>
            <S.BT
                onClick={() =>
                    showSuccess(
                        'TituloSucesso',
                        'mensagem sucesso !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
                    )
                }
            >
                notificação sucesso
            </S.BT>

            <S.BT
                onClick={() =>
                    showError(
                        'Titulo Erro',
                        'mensagem erro !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
                    )
                }
            >
                notificação erro
            </S.BT>
            <S.Title>Igrejas</S.Title>

            <S.Filter />

            <ChurchList />
        </S.Churths>
    )
}

export default Churths
