# Lottery API

### Requirements:

- Sell lottery ticket.
- update lottery ticket.
- delete lottery ticket.
- get all ticket.
- get ticket by id.
- bulk buy(user can buy multiple ticket at a time)
- raffle draw.

Ticket:

- id(unique),
- owner,
- price,
- timestamp

Routes:

- /tickets/t/:ticketId {GET} :- get ticket by ticket ID.
- /tickets/t/:ticketId {PATCH} :- update ticket by ID.
- /tickets/t/:ticketId {DELETE} :- delete ticket by id.

- /tickets/u/:username {GET} :- get tickets by username,
- /tickets/u/:username {PATCH} :- update ticket for a username,
- /tickets/u/:username {DELETE} :- delete ticket by username,

- /tickets/sell {POST} :- create ticket
- /tickets/bulk {POST} :- bulk sell ticket.
- /tickets/draw {POST} :- draw to get winners.
- /tickets {GET} :- find all tickets
