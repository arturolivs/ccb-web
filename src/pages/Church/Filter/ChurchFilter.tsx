import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import * as S from './ChurchFilter.styles'

const ChurchFilter = () => {
    return (
        <S.Container>
            <S.Form>
                <S.InputLabel>
                    Localidade
                    <S.Input name="local" type="text" />
                </S.InputLabel>

                <S.InputLabel>
                    Cod. Endereço
                    <S.Input name="cod-address" type="text" />
                </S.InputLabel>

                <S.Button type="button" value="Filtrar" />
            </S.Form>
        </S.Container>
    )
}

export default ChurchFilter
