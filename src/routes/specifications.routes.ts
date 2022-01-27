import { Request, Response, Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response);
});

/* specificationsRoutes.get('/', (request: Request, response: Response) => {
  const specifications = specificationsRepository.list();

  return response.status(200).json(specifications);
}); */

export { specificationsRoutes };
