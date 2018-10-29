import styled from 'styled-components'
import { Link } from '../i18n'

// Header component
export const Nav = styled.div`
  background: rebeccapurple;
  marginBottom: 1.45rem;
`
export const NavBar = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
export const NavBarTitle = styled.h1`
  margin: 0;
  color: white;
`
// Layout component
export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
//header...
export const HeaderLayer = styled.div`
    display: flex;
    flex-flow: row wrap; 
    align-items: flex-start;
    align-content: center;
    justify-content: space-between;
    padding: 17px 23px 10px 23px; 
`

export const HeaderLayerTitile = styled.h1`
    margin-top:0;
    margin-botton:0;
`

export const HeaderLayerBrand = styled(Link)`
    margin-top:-5px;    
    box-shadow: none;
    display: flex;
    align-items: center;
    flex-flow: column wrap; 
    align-content: center;
`

export const HeaderLayerBrandLogo = styled.img`
    align-self:center;
    margin-bottom: 0;
`