const adminController = {};

//======================================================
//  ADMIN HOME
//======================================================
adminController.renderAdmin = (req, res, next) => {
    res.render('./admin/indexAdmin', {layout: 'otro'});
}

module.exports = adminController;