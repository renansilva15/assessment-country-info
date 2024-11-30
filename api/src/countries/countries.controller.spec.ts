import { Test, TestingModule } from '@nestjs/testing';
import { CountriesController } from './countries.controller';
import { FindAllCountriesUseCase } from 'src/core/domain/country/application/use-cases/find-all-countries.use-case';

describe('CountriesController', () => {
  let controller: CountriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountriesController],
      providers: [
        {
          provide: FindAllCountriesUseCase,
          useValue: { execute: jest.fn().mockRejectedValue([]) },
        },
      ],
    }).compile();

    controller = module.get<CountriesController>(CountriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
