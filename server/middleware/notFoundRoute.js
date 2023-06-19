import { StatusCodes } from 'http-status-codes';

const notRouteFoundMiddleware = (req, res) => {
    return res.status(StatusCodes.NOT_FOUND).send('Route do not exist');
}

export default notRouteFoundMiddleware;