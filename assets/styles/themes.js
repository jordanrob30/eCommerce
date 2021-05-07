import {createMuiTheme} from '@material-ui/core'

const themes = createMuiTheme({
    palette: {
        type : 'dark'
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*': {
                    'scrollbar-width': 'none',
                },
                '*::-webkit-scrollbar': {
                    width: '4px',
                    height: '0px',
                }
            }
        }
    }
})

export default themes;