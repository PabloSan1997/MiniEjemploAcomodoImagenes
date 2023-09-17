
export function boomHandle(err, req, res, next){
	console.log(err);
	if(err.isBoom){
		const data = err.output.payload;
		res.status(data.statusCode).json(data);
	}
	next(err);
}