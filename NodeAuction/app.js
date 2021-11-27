const express = require('express');
const path = require('path');
const morgan = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config();
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const {sequelize} = require('./models');
const passportConfig = require('./passport');

const app = express();