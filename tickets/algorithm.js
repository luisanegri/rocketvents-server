// const Ticket = require('./model');
// async function calcTicket(ticket) {
//   let risk = 0;

//   try {
//     // primeira tarefa
//     const userTickets = await Ticket.findAll({
//       where: { userId: ticket.userId }
//     });

//     console.log('usertickets', userTickets);

//     const countUserTickets = userTickets.length;
//     if (countUserTickets === 1) {
//       risk += 10;
//     }

//     // segunda tarefa
//     const eventTickets = await Ticket.findAll({
//       where: { eventId: ticket.eventId }
//     });

//     const avgTicketPrice =
//       eventTickets.reduce((a, b) => {
//         return (a += b.price);
//       }, 0) / eventTickets.length;

//     if (ticket.price > avgTicketPrice) {
//       const difference1 = ticket.price - avgTicketPrice;
//       const diffPercentage = ((difference1 / avgTicketPrice) * 100).toFixed(2);
//       if (diffPercentage > 10) {
//         risk -= 10;
//       } else {
//         risk -= diffPercentage;
//       }
//     } else if (ticket.price <= avgTicketPrice) {
//       const difference2 = avgTicketPrice - ticket.price;
//       const diffPercentage = ((difference2 / avgTicketPrice) * 100).toFixed(2);
//       risk += diffPercentage;
//     }

//     // terceira tarefa
//     const timeCreated = ticket.createdAt.getHours();
//     if (timeCreated >= 9 && timeCreated <= 17) {
//       risk -= 10;
//     } else {
//       risk += 10;
//     }

//     // quarta tarefa
//     const countComments = ticket.comments;
//     if (countComments.length > 3) {
//       risk += 5;
//     }

//     // quinta tarefa
//     if (risk < 5) {
//       risk = 5;
//     } else if (risk > 95) {
//       risk = 95;
//     }

//     ticket.risk = risk;
//     return ticket;
//   } catch (err) {
//     console.log(err);
//   }
// }

// module.exports = calcTicket;
