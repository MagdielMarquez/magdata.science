import styled from 'styled-components'
import { Link } from '../i18n'
import Headroom from 'react-headroom'

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

export const Head = styled(Headroom)`
    position: relative;
    z-index: 3;
`
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
`
export const HeaderLayerBrandLogo = styled.img`
    align-self:center;
    margin-bottom: 0;
`
export const Welcome = styled.div`
    position: relative;
    color: #fff;
    display:flex;
    flex-direction: row-reverse;
    align-items: center;
    z-index: 2;
`
export const WelcomeTitle = styled.h2`
    margin-top:70px;
    position: absolute;
    z-index: 3;
`
export const Breadcrumb = styled.div`
    position: fixed;
    width: 100%;
    top: 0; 
    z-index: 1;
`
    
//    z-index: 1; 