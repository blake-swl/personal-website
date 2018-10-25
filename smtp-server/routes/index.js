import express from 'express';
// import validate from "express-validation";

import  emailController  from '../controller/';
// import validation from '../middleware/validation.js';

const router = express.Router();

router.route('/sendEmail')
  .post(emailController.send);
// router.route('/sendEmail').post(validate(validation.sendEmail), emailController);

export default router;