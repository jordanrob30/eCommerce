import { createMuiTheme } from '@material-ui/core'

const themes = {
    
        dark : createMuiTheme({
            palette: {
                type: 'dark'
            },
            overrides: {
                MuiTableRow: {
                    root: {
                        "&:last-child td": {
                            borderBottom: 0,
                        },
                    }
                }
            },        
        }),
        
        light : createMuiTheme({
            overrides: {
                MuiTableRow: {
                    root: {
                        "&:last-child td": {
                            borderBottom: 0,
                        },
                    }
                }
            },
        })

}

export default themes