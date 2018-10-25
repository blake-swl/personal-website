import express from 'express';
import validate from "express-validation";

import {emailController}  from '../controller/';
import validation from '../middelware/validation';

const router = express.Router();

router.route('/sendEmail')
  .post(validate(validation.sendEmail), emailController);

export default router;