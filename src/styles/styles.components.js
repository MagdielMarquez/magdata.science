import { Link } from '../i18n'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import { createBreakpoints } from 'styled-breakpoints';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';

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
export const HeaderLayer = styled.div`
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
//padding: 17px 23px 10px 23px;
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
        width: 650px;
        text-align: right;
        position: absolute;
        z-index: 3;
    }
    ${below('sm')} {
        h2 {
            width: 210px;
            font-size:1.25em;
        }
    }
    ${between('sm','md')} {
        h2 {
            width: 450px;
            font-size:1.45em;
        }
    }
    ${above('md')} {
        h2 {
            width: 650px;
        }
    }
`
export const WelcomeButton = styled(ActionButton)`
    margin-top:15px;
    margin-right:30px;
    color: #ffb74d;
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
export const Section = styled.section`
    & + section {
        display:flex;
        margin: 0px auto 0 auto;
        padding: 75px 10px 0 10px;
        align-items: center;
        flex-flow: column wrap; 
    }
    ${below('sm')} {
        & + section {
            max-width: 300px;
        }
    }
    ${between('sm','md')} {
        & + section {
            max-width: 550px;
        }
    }
    ${between('md','lg')} {
        & + section {
            max-width: 770px;
        }
    }
    ${above('lg')} {
        & + section {
            max-width: 960px;
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