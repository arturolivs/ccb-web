import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import * as S from './Edit.styles'

const ChurchFilter = () => {
    return (
        <S.Container>
            <S.Form>
                <S.InputLabel>
                    <S.LabelText>Localidade</S.LabelText>
                    <S.Input name="locale" type="text" />
                </S.InputLabel>

                <S.InputLabel>
                    <S.LabelText>Cod. Endereço</S.LabelText>
                    <S.Input name="cod-address" type="text" />
                </S.InputLabel>

                <S.Button type="button" value="Filtrar" />
            </S.Form>
        </S.Container>
    )
}

export default ChurchFilter
