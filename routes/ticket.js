const router = require("express").Router();
const db = require("../db/db");

router
  .route("/t/:ticketId")
  .get((req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = db.findById(ticketId);
    res.status(200).json(ticket);
  })
  .patch((req, res) => {
    const ticketId = req.params.ticketId;
    const updatedTicket = db.updateById(ticketId, req.body);
    res.status(200).json({ message: "Ticket Updated Successfully" });
  })
  .delete((req, res) => {
    const ticketId = req.params.ticketId;
    db.deleteById(ticketId);
    res.status(200).json({ message: `Ticket Deleted Successfully` });
  });
router
  .route("/u/:username")
  .get((req, res) => {
    const username = req.params.username;
    const ticket = db.findByUsername(username);
    res.status(200).json(ticket);
  })
  .patch()
  .delete();

router.post("/sell", (req, res) => {
  const { username, price } = req.body;
  const ticket = db.create(username, price);
  res.status(201).json({ message: "Ticket Created Successfully" });
});

router.post("/bulk", (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = db.bulkCreate(username, price, quantity);
  res
    .status(200)
    .json({ message: "Bulk ticket Created Successfully.", tickets });
});
router.get("/draw", (req, res) => {
  const winnerCount = Number(req.query.winners) || 3;
  const winners = db.draw(winnerCount);
  res.status(200).json({ winners });
});
router.get("/", (req, res) => {
  const tickets = db.find();
  res.status(200).json(tickets);
});

module.exports = router;
