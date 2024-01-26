const { Customer,  Admin,} = require("../../db");
const { Op } = require("sequelize");

const login = async (tokenId) => {
  let user = {};
  let cleanUser = {};
  
  user = await Customer.findOne({
    where: { tokenId: tokenId },   
  });

  if (user) {
    if (user.disabled) {
      throw Error("Cuenta baneada");
    }
    cleanUser = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      image: user.image,
      disabled: user.disabled,
      userType: user.userType,
      
          };
  }

  if (!user) {
    let userCustomer = await Customer.findOne({
      where: { tokenId: tokenId, disabled: false },
      
    });

    if (userCustomer) {
      if (userCustomer.disabled) {
        throw Error("Cuenta baneada");
      }
      cleanUser = {
        id: userCustomer.id,
        fullName: userCustomer.fullName,
        email: userCustomer.email,
        phone: userCustomer.phone,
        image: userCustomer.image,
        disabled: userCustomer.disabled,
        userType: userCustomer.userType,
        
      };
    }
    if (!userCustomer) {
      let userAdmin = await Admin.findOne({ where: { tokenId: tokenId } });
      if (userAdmin) {
        cleanUser = {
          id: userAdmin.id,
          userType: userAdmin.userType,
          disabled: userAdmin.disabled,
          fullName: userAdmin.fullName,
          email: userAdmin.email,
        };
      }
    }
  }

  return cleanUser;
};

module.exports = login;
