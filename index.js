const express = require('express');
const app = express();
const port = process.env.PORT || 4002;
const cors = require('cors');
const corsMiddleware = cors();
const bodyParser = require('body-parser');
const parserMiddleware = bodyParser.json();
const authRouter = require('./auth/router');
const userRouter = require('./user/router');
const eventsRouter = require('./events/router');
const commentsRouter = require('./comment/router');
app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(authRouter);
app.use(userRouter);
app.use(eventsRouter);
app.use(commentsRouter);

app.listen(port, () => console.log(`app running on port ${port}`));
