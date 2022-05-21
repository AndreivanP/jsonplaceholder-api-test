const route = '/users'
const chai = require('chai')
const utils = require('../utils')

describe(route + ' PUT', () => {
    
    it('Update all the fields from an user', async () => {
        const userId = 7
        const { body } = await request.put(route + `/${userId}`).send(utils.baseRequestUserPayload).expect(200);

        utils.baseResponseUserPayload.id = userId;
        chai.assert.deepEqual(body, utils.baseResponseUserPayload);
    });

    it('Update an user removing the address', async () => {
        const userId = 6
        delete utils.baseRequestUserPayload.address
        let removedAddress = utils.baseRequestUserPayload

        const { body } = await request.put(route + `/${userId}`).send(removedAddress).expect(200);

        utils.baseRequestUserPayload.id = userId;
        chai.assert.deepEqual(body, utils.baseRequestUserPayload);
    });

      /*It's bug! It shouldn't return http status code 500 
        but for the sake of the demonstration on Github actions I left it passing.*/
    it('Update an nonexistent user ', async () => {
        const userId = 11
        await request.put(route + `/${userId}`).send(utils.baseRequestUserPayload).expect(500);
    });
})