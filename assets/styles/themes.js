import {createMuiTheme} from '@material-ui/core'

const themes = {
    
    dark : createMuiTheme({
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
    }),

    light : createMuiTheme({
        palette: {
            type : 'light'
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

}

export default themes;