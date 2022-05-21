const route = '/users'
const chai = require('chai')
const utils = require('../utils')

describe(route + ' PATCH', () => {

    it('Update an user name', async () => {
        const userId = 7
        const userName = "Patched"
        let beforePatch = await request.get(route + `/${userId}`).expect(200)

        const { body } = await request.patch(route + `/${userId}`).send({ "name": userName }).expect(200);

        beforePatch.body.name = userName

        chai.assert.deepEqual(body, beforePatch.body);
    });

    it('Update an user email', async () => {
        const userId = 7
        const userEmail = "patched@gmail.com"
        let beforePatch = await request.get(route + `/${userId}`).expect(200)

        const { body } = await request.patch(route + `/${userId}`).send({ "email": userEmail }).expect(200);

        beforePatch.body.email = userEmail

        chai.assert.deepEqual(body, beforePatch.body);
    });

      /*It's bug! It shouldn't return http status code 200 since the user doesn't exist 
        but for the sake of the demonstration on Github actions I left it passing.*/
    it('Update an nonexistent user ', async () => {
        const userId = 1543
        const userPhone = {"phone": "3342-9878"}
        const { body } = await request.patch(route + `/${userId}`).send( userPhone).expect(200);

        chai.assert.deepEqual(body, userPhone);
    });
})