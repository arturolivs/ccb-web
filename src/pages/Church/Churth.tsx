import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import * as S from './Churth.styles'

const Churth = () => {
    return (
        <>
            <S.Title>Igrejas</S.Title>

            <S.Table>
                <tr>
                    <S.TableTh>Localidade</S.TableTh>
                    <S.TableTh>Cod. Endereço</S.TableTh>
                    <S.TableTh>Ações</S.TableTh>
                </tr>
                <S.Row>
                    <S.Cell>Curado III</S.Cell>
                    <S.Cell>BR-15-0046</S.Cell>
                    <S.CellIcon>
                        <FontAwesomeIcon icon={faPen} />
                        <FontAwesomeIcon icon={faTrashCan} />
                    </S.CellIcon>
                </S.Row>

                <S.Row>
                    <S.Cell>Sucupira</S.Cell>
                    <S.Cell>BR-15-0047</S.Cell>
                    <S.CellIcon>
                        <FontAwesomeIcon icon={faPen} />
                        <FontAwesomeIcon icon={faTrashCan} />
                    </S.CellIcon>
                </S.Row>

                <S.Row>
                    <S.Cell>UR 11</S.Cell>
                    <S.Cell>BR-15-0048</S.Cell>
                    <S.CellIcon>
                        <FontAwesomeIcon icon={faPen} />
                        <FontAwesomeIcon icon={faTrashCan} />
                    </S.CellIcon>
                </S.Row>

                <S.Row>
                    <S.Cell>Prazeres</S.Cell>
                    <S.Cell>BR-15-00499</S.Cell>
                    <S.CellIcon>
                        <FontAwesomeIcon icon={faPen} />
                        <FontAwesomeIcon icon={faTrashCan} />
                    </S.CellIcon>
                </S.Row>

                <S.Row>
                    <S.Cell>Prazeres</S.Cell>
                    <S.Cell>BR-15-00499</S.Cell>
                    <S.CellIcon>
                        <FontAwesomeIcon icon={faPen} />
                        <FontAwesomeIcon icon={faTrashCan} />
                    </S.CellIcon>
                </S.Row>
            </S.Table>
        </>
    )
}

export default Churth
