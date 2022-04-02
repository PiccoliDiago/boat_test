
import styled from 'styled-components'

import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    width: ${width}px;
    height: ${height}px;
    background-color: #9bbbc9;
    justify-content: flex-end;
`;

export const Pier = styled.View`
    position: absolute;
    bottom: 160px;
    width: ${width / 2.5}px;
    align-items: center;
    height: 25px;
    border-top-left-radius: 100px;
    background-color: #333;
    z-index: 2;
    right: ${width / 1.5}px;
`

export const Tower = styled.View`
    position: absolute;
    height: 45px;
    width: 25px;
    background-color: #0611a1;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    bottom: 175px;
    right: ${width / 1.1}px;
    z-index: 1;
    align-items: center;
`

export const LineHorTower = styled.View`
    height:2px;
    top: 2px;
    width: 25px;
    background-color: #aaa;
    position: absolute;
`

export const LineTower = styled.View`
    height: 45px;
    top: 3px;
    width: 3px;
    background-color: #aaa;
    position: absolute;
`
