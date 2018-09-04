import express from 'express';
import m from './subroutes';
import c from '../controllers/controller'

const router = express.Router();

router.use('/sub', m);

// router.get('/', (req, res) => {
// 	res.render('home', { message : 'hello from the router!' });
// });

router.get('/', c.getMainRoute);
router.get('/boo', c.getAnotherRoute);

module.exports = router;