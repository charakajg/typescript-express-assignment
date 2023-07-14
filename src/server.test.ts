import request from 'supertest';
import app from './server';
import { HttpStatusCode } from './types';

describe('GET /users/:id', () => {
  it('returns a user when a user with the id exists', async () => {
    const response = await request(app).get('/users/1');
    expect(response.status).toBe(HttpStatusCode.OK);
    expect(response.body).toHaveProperty('id', 1);
  });

  it('returns a 404 error when no user with the id exists', async () => {
    const response = await request(app).get('/users/999');
    expect(response.status).toBe(HttpStatusCode.NOT_FOUND);
  });
});

describe('POST /users', () => {
  it('adds a user and returns the user object when given valid data', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        id: 5,
        name: 'Eve'
      });
    expect(response.status).toBe(HttpStatusCode.CREATED);
    expect(response.body).toHaveProperty('id', 5);
  });

  it('returns a 500 error when given invalid data', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        id: 'invalid',
      });
    expect(response.status).toBe(HttpStatusCode.INTERNAL_SERVER_ERROR);
  });
});
