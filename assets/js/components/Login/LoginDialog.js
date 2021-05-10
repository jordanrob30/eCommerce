import React, {useState} from "react";
import { Slide, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginDialog = ({login}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        login.setUser({email: email, password: password}) ?
            login.setDialog(false):
            setError(true);
        
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        
        <Dialog
            open={login.dialog}
            onClose={() => login.setDialog(false)}
            aria-labelledby="form-dialog-title"
            TransitionComponent={Transition}
        >
            <form onSubmit={handleSubmit}>
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        onChange={handleEmailChange}
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        onChange={handlePasswordChange}
                        fullWidth
                        required
                    />
                    <DialogContentText>{error && "Login Failed"}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => login.setDialog(false)} color="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary">
                        Login
                    </Button>
                </DialogActions>
            </form>
        </Dialog>   
    );
};

export default LoginDialog;