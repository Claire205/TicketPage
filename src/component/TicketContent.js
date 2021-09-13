import React from 'react';
import {makeStyles} from "@material-ui/core";
import DatePicker from "./DatePicker";
import AddNumber from "./VistorNumber";



const TicketContent = ({museum}) =>{

    const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {

        maxWidth: 500,
        maxHeight: 1000,
    },
    image: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: 428,
        height: 428,
    },
    title:{
        padding: theme.spacing(2),
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    text:{
        padding: theme.spacing(10),
        margin: 'auto',
        },
}));

    const classes = useStyles();
    return(
        <div >
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h2 className={classes.title}>{museum.title}</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img src={museum.url} className={classes.image} alt=''/>
                    </div>
                    <div className="col-sm">
                        <div className={classes.text}>
                           <h4>Select Date and Travelers</h4><br/>
                            <DatePicker/>
                            <h3>Add number of travelers</h3>
                            <AddNumber/><br/>
                            <br/>
                            <br/>
                            <button>Check Availability</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className={classes.title}>
                            <h4>Overview</h4>
                            {museum.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default TicketContent;
