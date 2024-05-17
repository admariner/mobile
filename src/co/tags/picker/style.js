import styled from 'styled-components/native'

export const Wrap = styled.View`
    flex: 1;
    background: ${({theme})=>theme.background.regular};
`

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
`