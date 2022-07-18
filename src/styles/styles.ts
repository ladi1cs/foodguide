import styled from 'styled-components';
import {Colors} from '../constants/common';

export const BaseDiv = styled.div`
    background-color: ${Colors.White};
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-content: center;
    color: ${Colors.White};
`
export const Row = styled(BaseDiv)`
    flex-direction: row;
    align-items: left;
    margin: 5px 20px;
    background: transparent;
`
export const Column = styled(Row)`
    flex-direction: column;
`

export const Container = styled(BaseDiv)`
    font-family: Arial;
    min-height: 100vh;
`
export const TitleBar = styled(BaseDiv)`
    background-color: ${Colors.Gray};
    flex-direction: row;
    width: 100%;
    position: absolute;
    top:0;
    height: 50px;
`
export const ToolBar = styled(TitleBar)`
    background-color: ${Colors.LightGray};
    top:50px;
    height: 150px;
`
export const Label = styled.label<{size?: number, color?: string, bold?: boolean, space?: number, float?: string}>`
    font-size: ${props => (props.size || 18)}px;
    color: ${props => (props.color || 'black')};
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
    margin: 15px ${props => (props.space || 5)}px;
    float: ${props => (props.float || '')};
`
export const TextBox = styled.input`
    font-size: 16px;
    margin: 15px 0;
`
export const Button = styled.button<{color?: string}>`
    font-size: 20px;
    background-color: ${props => props.color || Colors.Blue};
    color: ${Colors.White};
    margin: 15px 10px;
    border-radius: 5px;
    
    &:hover {
        opacity: 0.7;
    }
`
export const Select = styled.select`
    font-size: 18px;
    color: gray;
    margin: 15px 10px;
    width: 180px;
`
export const RadioOption = styled.p`
    font-size: 18px;
    color: ${Colors.Blue};    
`

export const GridContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    height: 40vh;
    padding-top: 50px;
`
export const GridItem = styled.div<{width?: string, height?: string}>`
    padding: 30px;
    border: 1px solid ${Colors.Gray};
    margin-bottom: 20px;
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    background-color: ${Colors.White};
    border-radius: 5px;
`
export const Frame = styled.div<{width?: string, height?: string}>`
    flex-direction: column;
    align-items: left;
    background: transparent;
    border: 2px solid ${Colors.Gray};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
`
export const Legend = styled.legend`
    font-size: 12px;
    color: ${Colors.Blue};
`
export const Fieldset = styled.fieldset<{width?: string, height?: string}>`
    margin: 10px 20px;
    border: 1px solid ${Colors.Gray};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    border-radius: 5px;
`