import React from 'react';
import Ticket from "./Ticket";



const TicketList = ({ museums, handleSelected,selects}) => {

    return (
        <div>
            {
                museums.map((user, i) => {
                    return (
                        <Ticket
                            key={museums[i].id}
                            selected={selects[i]}
                            museum = {museums[i]}
                            handleSelected={handleSelected}
                        />
                    );
                })
            }
        </div>
    );
}

export default TicketList;
