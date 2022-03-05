import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlaceOfWorship,
    faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
import * as S from './SideMenu.styles'

const SideMenu = () => {
    return (
        <S.Container>
            <S.Title>CCB</S.Title>
            <S.Navigation>
                <S.List>
                    <S.ListItem>
                        <S.Item to="/igrejas">
                            <S.icon>
                                <FontAwesomeIcon icon={faPlaceOfWorship} />
                            </S.icon>
                            <S.title>Igrejas</S.title>
                        </S.Item>
                    </S.ListItem>

                    <S.ListItem>
                        <S.Item to="/anomalias">
                            <S.icon>
                                <FontAwesomeIcon icon={faScrewdriverWrench} />
                            </S.icon>
                            <S.title>Anomalias</S.title>
                        </S.Item>
                    </S.ListItem>
                </S.List>
            </S.Navigation>
        </S.Container>
    )
}

export default SideMenu
