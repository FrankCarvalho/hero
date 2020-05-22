const request = require('supertest');
const index = require('../../src/index');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();    
    });

    it('should be able to crate a new ONG', async () => {
        const response = await request(index)
        .post('/ongs').send({           
                nome: "APAE",
                email: "contato@apae.com.br",
                whatsapp: "9984715163",
                city: "Balsas",
                uf: "MA"            
        });
            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);

    });
});