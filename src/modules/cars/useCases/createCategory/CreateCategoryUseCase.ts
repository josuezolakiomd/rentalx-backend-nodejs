import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../repositories/ICategoriesRepository';

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: ICreateCategoryDTO): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category Already Exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };

/* 
    ## Other way to inside an exists instance without to create a new onw ##

  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  */
