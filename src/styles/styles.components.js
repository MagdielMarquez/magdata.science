import { Link } from '../i18n'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import { createBreakpoints } from 'styled-breakpoints'
import { ActionButton } from 'office-ui-fabric-react/lib/Button'
import { IconButton } from 'office-ui-fabric-react/lib/Button'

/**
 * Above x > something
 * Below x < something
 * Between something 1 < x < something 2
 * Only it's x = something 
 */
const { above, below, between } = createBreakpoints({
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
});
export const Head = styled(Headroom)`
    position: relative;
    z-index: 3;
`
export const HeaderLayer = styled.header`
    display: flex;
    flex-flow: row wrap; 
    align-items: flex-start;
    align-content: center;
    justify-content: space-between; 
    ${below('sm')} {
        padding: 17px 29px; 
        h1 {
            margin:-7px 0;
            font-size:1.35em;
            width:125px;
        }
    }
    ${between('sm','md')} {
        padding: 17px 37px 17px 47px; 
        h1 {
            margin: 3px 0;
            font-size:1.55em;
        }
    }
    ${above('md')} {
        padding: 17px 37px 17px 79px; 
        h1 {
            margin: -3px 0;
        }
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
    h2 {
        width: 650px;
        text-align: right;
        position: absolute;
        z-index: 1;
        padding-right: 19px;
    }
    ${below('sm')} {
        h2 {
            width: 190px;
            font-size:1.25em;
        }
    }
    ${between('sm','md')} {
        h2 {
            width: 430px;
            font-size:1.45em;
        }
    }
    ${above('md')} {
        h2 {
            width: 630px;
        }
    }
`
export const WelcomeButton = styled(ActionButton)`
    margin-top:15px;
    margin-right:30px;
    color: #ffb74d;
`
export const Bread = styled.div`
    position: fixed;
    width: 100%;
    top: 0; 
    z-index: 2;
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
        margin: 0 auto; 
        font-size: .801em;
        color: #d33c00;
        &:before {
            content: '\u2014 ';
        }
    }
`
export const BlockquoteReverse = styled.blockquote`
    padding: 0.539em 0.809em 0.539em 0.809em;
    margin: 0 0 0.801em;
    font-size: 1.078em;
    border-right: 5px solid #ea4300;
    p {
        margin: 0.200em 0;
    }
    footer {
        margin: 0 auto; 
        font-size: .801em;
        color: #d33c00;
        &:after {
            content: ' \u2014';
        }
    }
`
export const Section = styled.section`
    & + section {    
        width:  98vw;
        height: 100vh; 
        display: flex;
        flex-flow: column nowrap;     
        justify-content: center;
        align-items: center;
        align-content: center;
    }
`
export const Sub = styled.div`
    display: flex;
    flex-flow: row wrap; 
    ${below('sm')} {
        max-width: 300px;
    }
    ${between('sm','md')} {
        max-width: 550px;
    }
    ${between('md','lg')} {
        max-width: 770px;
    }
    ${above('lg')} {
        max-width: 960px;
    }
`
export const SubA = styled.article`
    flex: 1 1; 
    display: flex;
    flex-flow: column nowrap; 
`
export const SubAReverse = styled.article`
    flex: 1 1; 
    text-align: right;
    display: flex;
    flex-flow: column nowrap; 
`
export const SubB = styled.aside`
    flex: 0 0 300px; 
    display: flex;
    flex-flow: column nowrap; 
`
export const Readability = styled.p`
    width: 37em;
    text-align: justify;
    text-justify: inter-word;
`
export const Read = styled.div`
    width: 37em;
    text-align: justify;
    text-justify: inter-word;
    & h1 {
        font-size: 28px;
        margin: 0 0 21px 0;
    }
`
export const CardForm = styled.form`
    width: 100%;
    padding: 5px;
    background-color: #fcdfd3;
    box-shadow: 0 0 29px 5px #f38a61;
`
export const CardFormBlock = styled.div`
    display: flex;
    & div { 
        margin: 0 5px 0 5px;
        flex: 1 1; 
    }
    & label { 
        margin: 0 5px 0 -7px;
        flex: 1 1; 
    }
    & span div p span { 
        margin: 0 5px 0 5px;
    }
`
export const IconButtonInfo = styled(IconButton)`
    height: auto;
    & div {
        height: auto;
    }
    & div i {
        font-size: 12px;
    }
`
export const CardFormButton = styled.div`
    margin: 15px 15px 5px 0;
    text-align: end;
    & button {
        border: none;
        color: #b23300;
        background: #ffb74d;
    }
    & button:hover {
        background: #ea4300;
    }
`
export const ReadabilityReverse = styled.p`
    width: 37em;
    text-align: justify;
    text-justify: inter-word;
    align-self: flex-end;
`
export const FooterLayer = styled.footer`
    color: #fff;
    width:  98.5vw;
    height: 497px;
    display: flex;
    flex-flow: column nowrap;     
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #24146e;
`
export const CardFormMessages = styled.div`
    margin-top: 37px; 
`
export const IconsLinks = styled.a`
    width: 50px;
    height: 50px;
    margin: 5px;
`
export const IconsLinksvg = styled.svg`
    &:hover{
        fill: #ea4300;
    }
`

/*

    justify-content: center;
    align-items: center;

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

        & > div + span {
            font-size:1.1em;
            text-align:center;
            margin-top: 10px;
        }
        span {
            
        }
section + section {
    margin: 80px auto 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 1.45rem;
}
margin-top:px;
*/