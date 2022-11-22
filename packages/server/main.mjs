import express from 'express';
import {createServer} from "http";
import cors from 'cors';
import Logger from "./utils/logger.mjs";
import {ApiError, ResponseEnvelope} from "@potentii/rest-envelopes";
import ApiController from "./controllers/api-controller.mjs";

const app = express();
const httpServer = createServer(app);

app.use(cors());


(async () => {

	process.on('uncaughtException', (err, origin) => {
		Logger.error(`PROCESS:UNCAUGHT_ERR`, `Uncaught error`, err, { origin:origin });
	});


	if(!process.env.PORT)
		throw new Error(`Environment variable "PORT" not set`);


	const rootRouter = new express.Router();

	await ApiController.setup(rootRouter);


	app.use(`/`, rootRouter);


	app.use(`*`, (req, res, next) => {
		res.status(404).end();
	});


	app.use(`*`, (err, req, res, next) => {
		Logger.error(`REQUEST:UNCAUGHT_ERR`, `Uncaught error on "[${req.method}] ${req.originalUrl}"`, err, { method:req.method, path:req.originalUrl, reqBody:req.body, reqQuery:req.query });
		res.status(500)
			.json(ResponseEnvelope.withError(ApiError.create(`INTERNAL_SERVER_ERROR`, `Internal server error`, [])))
			.end();
	});


	const port = process.env.PORT;
	const server = httpServer.listen(port, () => {
		Logger.info(`SERVICE_STARTED`, `Server started @ http://localhost:${port}/`, { url:`http://localhost:${port}/`, port:port });
	});

	process.on('beforeExit', code => {
		Logger.info(`PROCESS:STOPPING`, `Process is stopping`, { code:code });
		server.close();
	});

	process.on('exit', code => {
		Logger.info(`PROCESS:STOPPED`, `Process stopped`, { code:code });
	});

})();
