import React from 'react'

import ChurchEditForm from './Form'
import * as S from './ChurchEdit.styles'

const ChurchEdit = () => {
    return (
        <S.Container>
            <S.Title>Editar Igreja</S.Title>
            <ChurchEditForm />
        </S.Container>
    )
}

export default ChurchEdit
