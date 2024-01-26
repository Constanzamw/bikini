const { Customer, Appointment, Review } = require('../../db')

const getCustomerById = async (id) => {
  const customer = await Customer.findByPk(id)

  return {
    tokenId: customer.tokenId,
    fullName: customer.fullName,
    email: customer.email,
    phone: customer.phone,
    image: customer.image,
    
  }
}
module.exports = getCustomerById