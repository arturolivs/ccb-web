import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import * as S from './ChurchList.styles'

const ChurchList = () => {
    return (
        <S.Table>
            <tr>
                <S.Header>Localidade</S.Header>
                <S.Header>Cod. Endereço</S.Header>
                <S.Header>Ações</S.Header>
            </tr>
            <S.Row>
                <S.Cell>Curado III</S.Cell>
                <S.Cell>BR-15-0046</S.Cell>
                <S.CellIcon>
                    <S.Button>
                        <FontAwesomeIcon icon={faPen} />
                    </S.Button>

                    <S.Button>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </S.Button>
                </S.CellIcon>
            </S.Row>

            <S.Row>
                <S.Cell>Sucupira</S.Cell>
                <S.Cell>BR-15-0047</S.Cell>
                <S.CellIcon>
                    <S.Button>
                        <FontAwesomeIcon icon={faPen} />
                    </S.Button>

                    <S.Button>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </S.Button>
                </S.CellIcon>
            </S.Row>

            <S.Row>
                <S.Cell>UR 11</S.Cell>
                <S.Cell>BR-15-0048</S.Cell>
                <S.CellIcon>
                    <S.Button>
                        <FontAwesomeIcon icon={faPen} />
                    </S.Button>

                    <S.Button>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </S.Button>
                </S.CellIcon>
            </S.Row>

            <S.Row>
                <S.Cell>Prazeres</S.Cell>
                <S.Cell>BR-15-00499</S.Cell>
                <S.CellIcon>
                    <S.Button>
                        <FontAwesomeIcon icon={faPen} />
                    </S.Button>

                    <S.Button>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </S.Button>
                </S.CellIcon>
            </S.Row>

            <S.Row>
                <S.Cell>Prazeres</S.Cell>
                <S.Cell>BR-15-00499</S.Cell>
                <S.CellIcon>
                    <S.Button>
                        <FontAwesomeIcon icon={faPen} />
                    </S.Button>

                    <S.Button>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </S.Button>
                </S.CellIcon>
            </S.Row>
        </S.Table>
    )
}

export default ChurchList
