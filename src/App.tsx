import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Church from './pages/Church'
import Anomaly from './pages/Anomaly'

import GlobalStyle from './theme/globalStyles'

import './theme/fonts.css'
import SideMenu from './components/SideMenu'
import * as S from './App.styles'

const App = () => {
    return (
        <S.Container>
            <SideMenu />
            <S.Content>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="igrejas" element={<Church />} />
                    <Route path="anomalias" element={<Anomaly />} />
                </Routes>
            </S.Content>
            <GlobalStyle />
        </S.Container>
    )
}

export default App
