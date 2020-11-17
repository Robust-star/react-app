import React from "react";
import {
    Grid,
    makeStyles,
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
        marginLeft: "6rem",
        marginRight: "6rem",
        marginTop:"10rem"
    },
    text: {
        margin: "10rem",
        fontSize: "2.5rem",
        [theme.breakpoints.down('sm')]:{
            margin: "5rem",
            fontSize: "1rem",
          }
    },
}));

export default function LandingCard() {
    const classes = useStyles();

    return (
        <div>
            <Grid container justify={"center"}>
            <Grid item lg={6} sm={12} xs={12} alignItems="center">
                    <Typography className={classes.text}>
                        Welcome to Hello World
            <br />
            Assignment at SSS Software
            <br />
            Solutions! Good Luck.
          </Typography>
                </Grid>
                <Grid item lg={4} sm={12} xs={12} justify>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                style={{ background: "gray" }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Success!!
                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lets get started doing awesome things.
                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
