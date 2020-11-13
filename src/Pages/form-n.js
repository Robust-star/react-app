import React from "react";
import {
    Grid,
    makeStyles,
    Typography,
    TextField,
    Button,
    Switch,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        maxWidth: 250,
        margin: "8rem 0 0 15rem",
    },
    text: {
        margin: "10rem",
        fontSize: "2.5rem",
    },
}));

export default function LandingForm() {
    const classes = useStyles();

    return(
        <div>
            <Grid container>
                <Grid item lg={6}>
                    <Typography className={classes.text}>
                        Welcome to Hello World
                        <br />
                         Assignment at SSS Software
                        <br />
                        Solutions!! Good Luck.
                    </Typography>
                </Grid>
            
                <Grid item lg={4}>
                    <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            required
                            id="standard-text-input"
                            label="Name"
                            type="text"
                            
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="standard-text-input"
                            label="Age"
                            type="text"
                            
                        />
                    </div>
                    <div style={{ marginLeft: "10rem" }}>
                        ARE YOU ABOVE 18
                        <Switch color="primary" />
                    </div>
                    <div>
                        <TextField
                                required
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                    </div>
                    <div>
                        <TextField
                            
                            id="standard-password-input"
                            label="Confirm Password"
                            type="password"
                            
                            required={true}
                            placeholder="Re-enter your password"
                        />
                    </div>
                    <br/>
                    <div style={{ marginLeft: "9rem",width:"30px" }}>
                        <Button
                        
                        color="primary"
                        variant="contained"
                        type="submit"
                        >
                        Submit
                        </Button>
                    </div>
                    
                </form>
                </Grid>
            </Grid>
          

                
        </div>
    )
}