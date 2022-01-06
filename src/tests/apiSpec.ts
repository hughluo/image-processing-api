import supertest from 'supertest';
import app from '../index';
import fs from 'fs';

const request = supertest(app);
describe('Test image api endpoint responses', () => {
    afterEach(() => {
        console.log(__dirname)
        // fs.rmdir()        
    });

    it('non-existing filename', async () => {
        const response = await request.get('/api/images?filename=void');
        expect(response.status).toBe(400);
    })

    it('width is not a number', async () => {
        const response = await request.get('/api/images?filename=parrot.jpeg&height=100&width=not-a-number');
        expect(response.status).toBe(400);
    })

    it('height is not a number', async () => {
        const response = await request.get('/api/images?filename=parrot.jpeg&width=100&height=not-a-number');
        expect(response.status).toBe(400);
    })


    it('missing width', async () => {
        const response = await request.get('/api/images?filename=parrot.jpeg&height=100');
        expect(response.status).toBe(400);
    })

    it('missing height', async () => {
        const response = await request.get('/api/images?filename=parrot.jpeg&width=100');
        expect(response.status).toBe(400);
    })

    it('missing filename', async () => {
        const response = await request.get('/api/images?height=100&width=100');
        expect(response.status).toBe(400);
    })

    it('success with body as png', async () => {
        const response = await request.get('/api/images?filename=parrot.jpeg&width=200&height=200');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toBe('image/png')
        expect(response.body).toBeDefined();
    })

});