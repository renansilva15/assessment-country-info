import { CountryRepository } from '../../enterprise/repositories/country.repository';
import { FindAllCountriesUseCaseOutputDto } from '../dto/find-all-countries.dto';

export class FindAllCountriesUseCase {
  constructor(private readonly countryRepository: CountryRepository) {}

  async execute(): Promise<FindAllCountriesUseCaseOutputDto[]> {
    return this.countryRepository.findAll();
  }
}
