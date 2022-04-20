import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlaceOfWorship,
    faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
import { SideMenuItem } from './SideMenu.types'

const sideMenuConfig: SideMenuItem[] = [
    {
        id: 1,
        link: '/igrejas',
        label: 'Igrejas',
        icon: <FontAwesomeIcon icon={faPlaceOfWorship} />,
    },
    {
        id: 2,
        link: '/anomalias',
        label: 'Anomalias',
        icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
    },
]

export default sideMenuConfig
