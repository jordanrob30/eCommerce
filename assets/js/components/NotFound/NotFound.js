import { Container, Paper, Typography } from '@material-ui/core'
import React from 'react'

const NotFound = () => {
    return (
        <Container>
            <Paper>
                <Typography variant="h1" align="center">
                    Error 404: Page Not Found
                </Typography>
            </Paper>
        </Container>
    )
}

export default NotFound
