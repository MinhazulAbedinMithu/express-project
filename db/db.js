const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @param {Ticket} return a ticket object
   */

  //sell a ticket
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   */

  //sell multiple ticket
  bulkCreate(username, price, quantity) {
    const buyTickets = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      buyTickets.push(ticket);
    }
    return buyTickets;
  }

  //find all ticket
  find() {
    return this.tickets;
  }

  /**
   * Find ticket by id
   * @param {string} ticketId
   */
  //find single ticket by id
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       *
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );
    return ticket;
  }

  /**
   * Find ticket by username
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  //find single ticket by username
  findByUsername(username) {
    const tickets = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === username
    );
    return tickets;
  }

  /**
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @param {Ticket} 
  
  */
  //update ticket by id
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();

    return ticket;
  }

  /**
   * @param {string} username
   * @param {{username: string, price: number}} ticketBody
   * @param {Ticket} 
  
  */
  //update ticket by id
  // updateByUsername(username, ticketBody) {
  //   const ticket = this.findById(ticketId);
  //   ticket.username = ticketBody.username ?? ticket.username;
  //   ticket.price = ticketBody.price ?? ticket.price;
  //   ticket.updatedAt = new Date();

  //   return ticket;
  // }

  /**
   * @param {string} ticketId
   */

  //delete ticket by id
  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    let winnerIndexes = new Array(winnerCount);
    let index = 0;
    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);
      if (!winnerIndexes.includes(winnerIndex)) {
        winnerIndexes[index++] = winnerIndex;
        continue;
      }
    }
    // for (let i = 0; i < indexes.length; i++) {
    //   let index = Math.floor(Math.random() * this.tickets.length);
    //   while (indexes.includes(index)) {
    //     let index = Math.floor(Math.random() * this.tickets.length);
    //   }
    //   indexes.push(index);
    // }

    const winners = winnerIndexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();
module.exports = myDB;
