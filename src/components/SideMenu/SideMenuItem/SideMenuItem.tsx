import React from 'react'
import { SideMenuItem as ISideMenuItem } from '../SideMenu.types'

import * as S from './SideMenuItem.styles'

interface SideMenuItemProps {
    item: ISideMenuItem
    selectItem: (item: ISideMenuItem) => void
    selected: boolean
}

const SideMenuItem = ({ item, selectItem, selected }: SideMenuItemProps) => {
    return (
        <S.SideMenuItem
            onClick={() => selectItem(item)}
            aria-selected={selected ? 'true' : 'false'}
        >
            <S.IconContainer>{item.icon}</S.IconContainer>
            <S.Label>{item.label}</S.Label>
        </S.SideMenuItem>
    )
}

export default SideMenuItem
