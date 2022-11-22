import express from 'express';


export default class ApiController {

	/**
	 * @param {Router} parentRouter
	 */
	static async setup(parentRouter){
		const router = new express.Router();


		// TODO implement api routes here


		router.use(`*`, (req, res, next) => {
			res.status(404)
				.json(ResponseEnvelope.withError(ApiError.create(`NOT_FOUND`, `Resource could not be found`, [])))
				.end();
		});

		parentRouter.use(`/api/v1`, router);
	}

}