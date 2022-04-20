import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './SideMenu.styles'
import SideMenuItem from './SideMenuItem'
import sideMenuConfig from './SideMenu.config'
import { SideMenuItem as ISideMenuItem } from './SideMenu.types'

const SideMenu = () => {
    const navigate = useNavigate()

    const [itemIdSelected, setItemSelected] = React.useState(1)

    const handleNavigate = (item: ISideMenuItem) => {
        setItemSelected(item.id)
        navigate(item.link)
    }

    return (
        <S.Container>
            <S.Title>CCB</S.Title>
            <S.Navigation>
                <S.List>
                    {sideMenuConfig.map((item) => (
                        <SideMenuItem
                            item={item}
                            selectItem={handleNavigate}
                            selected={itemIdSelected === item.id}
                        />
                    ))}
                </S.List>
            </S.Navigation>
        </S.Container>
    )
}

export default SideMenu
