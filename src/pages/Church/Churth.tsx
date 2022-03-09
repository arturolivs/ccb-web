import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import * as S from './Churth.styles'
import ChurthList from './List'

const Churth = () => {
    return (
        <S.Container>
            <S.Title>Igrejas</S.Title>

            <S.FormContainer>
                <S.Form>
                    <label htmlFor="local">
                        <input name="local" type="text" />
                    </label>

                    <label htmlFor="cod-address">
                        <input name="cod-address" type="text" />
                    </label>

                    <input type="button" value="Filtrar" />
                </S.Form>
            </S.FormContainer>

            <ChurthList />
        </S.Container>
    )
}

export default Churth
