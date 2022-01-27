import { Specification } from '../model/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  Create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
  list(): Specification[];
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
