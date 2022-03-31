import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import * as S from './Church.styles'
import ChurchList from './List'
import ChurchFilter from './Filter'

const Churth = () => {
    return (
        <S.Container>
            <S.Title>Igrejas</S.Title>

            <ChurchFilter />

            <ChurchList />
        </S.Container>
    )
}

export default Churth
