const route = '/users'
const chai = require('chai')
const utils = require('../utils')

describe(route + ' POST', () => {

    it('Create an user and validate the whole response payload', async () => {
        const { body } = await request.post(route).send(utils.baseRequestUserPayload).expect(201);

        chai.assert.deepEqual(body, utils.baseResponseUserPayload);
    })
})