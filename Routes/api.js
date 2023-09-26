const express = require('express');
app.use('/api', require('./src/Routes/api'))
const router = express.Router();


const userController = require('../Controllers/userController');
const adminController = require('../Controllers/adminController');
const cartController = require('../Controllers/cartController');
const customerController = require('../Controllers/customerController');
const postController = require('../Controllers/postController');
const wishlistController = require('../Controllers/wishlistController');
const categoryController = require('../Controllers/ categoryController');
const orderController = require('../Controllers/ orderController');
const subAdminController = require('../Controllers/ subAdminController');
const order_itemController = require('../Controllers/order_itemController');
const paymentController = require('../Controllers/paymentController');
const productController = require('../Controllers/productController');
const shipmentController = require('../Controllers/shipmentController');


router.post('/user/create', userController.create);
router.get('/user/read', userController.read);
router.delete('/user/delete', userController.delete);
router.put('/user/update', userController.update);


router.post('/admin/create', adminController.create);
router.get('/admin/read', adminController.read);
router.delete('/admin/delete', adminController.delete);
router.put('/admin/update', adminController.update);



module.exports = router;
