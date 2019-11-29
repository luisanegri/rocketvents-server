const { Router } = require('express');
const Ticket = require('./model');
const router = new Router();
const auth = require('../auth/middleware');

router.post('/event/:eventId/ticket', auth, (req, res, next) => {
  console.log(req.body, 'req');
  Ticket.create({
    ...req.body,
    eventId: req.params.eventId
  })
    .then(event => {
      res.json(event);
    })
    .catch(error => next(error));
});

// get all tickets from specific event
router.get('/event/:eventId/ticket', (req, res, next) => {
  Ticket.findAll({ where: { eventId: req.params.eventId } })
    .then(ticket => res.send(ticket))
    .catch(error => next(error));
});

// get single ticket
// implement risk algorithm
router.get('/ticket/:ticketId', async (req, res, next) => {
  try {
    // console.log(req.body, 'req');
    const ticketDetail = await Ticket.findOne({
      where: { id: req.params.ticketId }
    });
    // console.log('ticketDetail', ticketDetail.dataValues);
    const userTickets = await Ticket.findAll({
      where: { user: req.ticket.userId }
    });
    console.log('userTickets', userTickets);
    res.send(userTickets.dataValues);
  } catch {}
});
// count tickets for user
// const countUserTickets = userTickets.length;
// // if user has only one ticket add 10 of risk
// if (countUserTickets === 1) {
//   risk.ticket += 10;
// }
// find tickets of specific event
// const eventTickets = Ticket.find({ where: { event: ticket.eventId } });
// map price of all events tickets
// const eventTicketsPrice = eventTickets.map(ticket => ticket.price);
// find amount of tickets
// const countEventTickets = eventTicketsPrice.length;
// calculate average
// const avgTicketPrice =
//   eventTicketsPrice.reduce((a, b) => {
//     return a + b;
//   }, 0) / countEventTickets;

// if (ticket.price < avgTicketPrice) {
//   const difference = ticket.price - avgTicketPrice;
//   const diffPercentage = (difference / avgTicketPrice) * 100;
//   if (ticket.price < diffPercentage) {
//     ticket.risk += diffPercentage;
//   } else if (ticket.price > diffPercentage) {
//     ticket.risk -= diffPercentage;
//   }
// }

// return ticket;

// res.status(201).json(ticket);

router.put('/event/:eventId/ticket/:ticketId', auth, (req, res, next) => {
  Ticket.findByPk({
    where: { id: req.params.ticketId, eventId: req.params.eventId }
  })
    .then(ticket => ticket.update(req.body))
    .then(ticket => res.send(ticket))
    .catch(error => next(error));
});

router.delete('/ticket/:id', (req, res, next) => {
  Ticket.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number }))
    .catch(error => next(error));
});

module.exports = router;
