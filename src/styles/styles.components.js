import { Link } from '../i18n'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import { ActionButton } from 'office-ui-fabric-react/lib/Button';

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
    h1 {
        margin-top:0;
        margin-botton:0;
    }
`
export const HeaderLayerBrand = styled(Link)`
    margin-top:-5px;    
    box-shadow: none;
    display: flex;
    align-items: center;
    flex-flow: column wrap; 
    img {
        align-self:center;
        margin-bottom: 0;
    }
`
export const Welcome = styled.div`
    position: relative;
    color: #ea4300;
    display:flex;
    flex-direction: row-reverse;
    align-items: center;
    z-index: 2;
    h2 {
        width: 450px;
        text-align: right;
        position: absolute;
        z-index: 3;
        div {
            
        }
        span {
            
        }
    }
`
export const WelcomeButton = styled(ActionButton)`
    margin-top:15px;
    margin-right:30px;
`
export const Breadcrumb = styled.div`
    position: fixed;
    width: 100%;
    top: 0; 
    z-index: 1;
    background-color:#e8eaf6 !important;
`
export const Blockquote = styled.blockquote`
    padding: 0.539em 0.809em 0.539em 0.809em;
    margin: 0 0 0.801em;
    font-size: 1.078em;
    border-left: 5px solid #ea4300;
    p {
        margin: 0.200em 0;
    }
    footer {
        margin-top: 0; 
        margin-bottom: 0; 
        font-size: .801em;
        color: #d33c00;
        &:before {
            content: '\u2014 ';
        }
    }
`


/*
export const BlockquoteFooter = styled(B)`::before
    content: "\2014 \00A0";
`
    ::last-child {
        margin-bottom: 0;
    }


    display: block;
    line-height: .801em;
export const Container = styled.div`

`

*/
export const Section = styled.section`
`

//margin-top:px;