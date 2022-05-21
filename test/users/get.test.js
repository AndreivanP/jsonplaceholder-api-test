const route = '/users'
const chai = require('chai')

describe(route + ' GET', () => {
    it('Get an user and validate the whole response payload', async () => {
        const { body } = await request.get(route + '/1').expect(200)

        chai.assert.deepEqual(body, {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        })
    })

    it('Get an user and validate the key fields', async () => {
        const { body } = await request.get(route + '/10').expect(200);

        chai.assert.equal(body.name, 'Clementina DuBuque');
        chai.assert.equal(body.email, 'Rey.Padberg@karina.biz');
        chai.assert.equal(body.phone, '024-648-3804');
        chai.assert.equal(body.website, 'ambrose.net');
        chai.assert.deepEqual(body.address, {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        });
    })

    it('Search for an user by email', async () => {
        const userEmail = 'Julianne.OConner@kory.org'
        const { body } = await request.get(route + `?email=${userEmail}`).expect(200);

        chai.assert.equal(body[0].name, 'Patricia Lebsack');
        chai.assert.equal(body[0].email, userEmail);
    })

    it('Get a nonexistent user', async () => {
        const { body } = await request.get(route + '/11').expect(404);

        chai.assert.deepEqual(body, {});
    })

    it('Search for an user by a nonexistent email', async () => {
        const userEmail = 'invalid@test.org'
        const { body } = await request.get(route + `?email=${userEmail}`).expect(200);

        chai.assert.deepEqual(body, []);
    })
})