import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000);
