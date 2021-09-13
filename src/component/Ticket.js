import React from 'react';
import {ButtonBase, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import yellow from "@material-ui/core/colors/yellow";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    normalPaper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    selectedPaper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        backgroundColor: "lightgrey",
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const Ticket = ({ museum,selected,handleSelected}) => {
    const classes = useStyles();
    return (
        <div className={classes.root} onClick={() => handleSelected(museum)}>
            <Paper className={(selected === true ? classes.selectedPaper: classes.normalPaper)}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={museum.url} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {museum.title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {museum.location}
                                </Typography>
                                <br/>
                                <Typography variant="body2" color="textSecondary">
                                    Free cancellation
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">{museum.price}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>


    );


}

export default Ticket;
