import React from 'react'
import * as S from './SideMenu.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlaceOfWorship, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

const SideMenu = () => {

    return (
            <S.Container>
                <S.Navigation>
                <S.List>
                    <S.ListItem>
                        <S.Link>
                            <S.title>CCB</S.title>
                        </S.Link>
                    </S.ListItem>

                    <S.ListItem>
                        <S.Link>
                            <S.icon><FontAwesomeIcon icon={faPlaceOfWorship} /></S.icon>
                            <S.title>Igrejas</S.title>
                        </S.Link>
                    </S.ListItem>
                   
                    <S.ListItem>
                        <S.Link>
                            <S.icon><FontAwesomeIcon icon={faScrewdriverWrench} /></S.icon>
                            <S.title>Anomalias</S.title>
                        </S.Link>
                    </S.ListItem>

                </S.List>
                </S.Navigation>
            </S.Container>
    )
}

export default SideMenu