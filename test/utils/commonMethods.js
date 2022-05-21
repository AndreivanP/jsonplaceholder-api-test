class commonMethods {
    async performGetById(route, id, statusCode) {
      return await request.get(route + `/${id}`).expect(statusCode)
    }
}
  
module.exports = new commonMethods();