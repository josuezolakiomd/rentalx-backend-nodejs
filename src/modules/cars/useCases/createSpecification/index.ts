import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './createSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const createSpecificationRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  createSpecificationRepository,
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export { createSpecificationController };
