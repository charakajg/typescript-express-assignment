import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import initialUsers from './initialUsers.json';
import { HttpStatusCode, User } from './types';
import errorHandler from './errorHandler';
import { strings } from './strings';

const app = express();

const DEFAULT_PORT = 3000;

const database: User[] = initialUsers;

app.use(bodyParser.json());

app.get('/users/:id', (req: Request, res: Response, next: NextFunction) => {
  const user = database.find(u => u.id === parseInt(req.params.id));
  
  if (user) {
    res.send(user);
  } else {
    next({
      status: HttpStatusCode.NOT_FOUND,
      message: strings.USER_NOT_FOUND,
    });
  }
});

app.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const user: User = req.body;
  
  if (user && user.id && user.name) {
    database.push(user);
    res.status(HttpStatusCode.CREATED).send(user);
  } else {
    next({
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: strings.INVALID_USER_DATA,
    });
  }
});

// Use the error handler middleware
app.use(errorHandler);

const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, () => {
  console.log(strings.SERVER_LISTENING(port));
});

export default app;
