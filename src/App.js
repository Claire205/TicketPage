import './App.css';
import SearchBox from "./component/SearchBox";
import React from "react";
import TicketList from "./component/TicketList";
import Tickets from "./ticket.json";


import { Server } from "miragejs";
import {Grid, Paper} from "@material-ui/core";
import TicketContent from "./component/TicketContent";

new Server({
    routes() {
        this.namespace = "api";

        this.get("/ticketlist/", () => {
            return Tickets;
        });
        this.post("/PostTicketList/", (schema, request) => {
            let params = request.requestBody;
             let filteredTickets = Tickets.filter(ticket => {
                 return ticket.title.toLowerCase().includes(params.toLowerCase());
             });
            return filteredTickets;
            }
        )
    }
});

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            museums: [],
            searchfield: '',
            selects: [],
            selectedMuseum:{},
            searchNotFound:false
        }
    }

    handleSelected = (museum) =>{
        let s =Array.from({length: this.state.museums.length}, (v, i) => false);
        s[this.state.museums.indexOf(museum)] = true;
        this.setState({selects:s,selectedMuseum:museum});

    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});

    }
    onSearchButtonClick = ()=>{
        fetch('/api/PostTicketList', {
            method: 'POST',
            body: this.state.searchfield
        }).then(response => response.json()).then(res=>{
            if (!res.length){
                this.setState({searchNotFound:true});
            }else{
                this.setState({museums:res,searchNotFound:false,selectedMuseum:res[0]});
            }
        })
    }

    componentDidMount() {

        fetch('/api/PostTicketList', {
            method: 'POST',
            body: this.state.searchfield
        }).then(response => response.json()).then(res=>{this.setState({museums:res,selectedMuseum:res[0]});})

    }


    render() {
        const {museums} = this.state;

        if (!museums.length) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='px-4 py-4'>
                    <Grid container spacing={3} >
                        <Grid item xs={12} style={{height: 80}} >
                            <SearchBox searchText={this.onSearchChange} searchClick={this.onSearchButtonClick} />
                        </Grid>
                        <Grid item xs={12} className={(this.state.searchNotFound === true ? {}: 'none')}>
                            Cannot find the museum.
                        </Grid>

                        <Grid item xs={4}>
                            <Paper className='overflow-auto' style={{ height: 'calc( 100vh - 144px )' }}>

                                    <TicketList museums={museums} className='py-0' selects={this.state.selects} handleSelected={this.handleSelected}/>

                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper className='overflow-auto' style={{ height: 'calc( 100vh - 144px )' }}>
                                <TicketContent museum={this.state.selectedMuseum} />
                            </Paper>
                        </Grid>

                    </Grid>
                </div>
            );
        }
    }
}


export default App;
