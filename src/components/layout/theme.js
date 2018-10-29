import { createTheme } from '@uifabric/styling';
export default  {
    settings: {
        theme: createTheme({
            palette: {
                themePrimary: '#ea4300',
                themeLighterAlt: '#fef7f4',
                themeLighter: '#fcdfd3',
                themeLight: '#f9c3ae',
                themeTertiary: '#f38a61',
                themeSecondary: '#ed581c',
                themeDarkAlt: '#d33c00',
                themeDark: '#b23300',
                themeDarker: '#832500',
                neutralLighterAlt: '#e0e2ee',
                neutralLighter: '#dcdeea',
                neutralLight: '#d3d5e1',
                neutralQuaternaryAlt: '#c5c7d1',
                neutralQuaternary: '#bcbec8',
                neutralTertiaryAlt: '#b4b6c0',
                neutralTertiary: '#b1a7de',
                neutralSecondary: '#7160bd',
                neutralPrimaryAlt: '#412c9f',
                neutralPrimary: '#311b92',
                neutralDark: '#24146e',
                black: '#1b0f51',
                white: '#fff',
            }
        })
    },
    scopedSettings: {
        PrimaryButton: {
            styles: {
                root: {
                    borderRadius: 3
                }
            }
        },
        DefaultButton: {
            styles: {
                root: {
                    background: 'transparent',
                    border: '2px solid #BDBDBD',
                    borderRadius: 3
                },
                rootHovered: {
                    background: 'transparent'
                }
            }
        }
    }
}