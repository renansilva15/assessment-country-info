import { CountryEntity } from '../entities/country.entity';
import { PopulationEntity } from '../entities/population.entity';

export type CountryMainInfo = Pick<CountryEntity, 'commonName' | 'countryCode'>;

export interface CountryRepository {
  findAll(): Promise<CountryMainInfo[]>;
}

export interface FillCountriesRepository {
  fillCountries(): Promise<CountryEntity[]>;
  fillCountriesPopulation(
    countries: CountryEntity[],
  ): Promise<PopulationEntity[]>;
  fillCountriesFlag(
    countries: CountryEntity[],
  ): Promise<CountryEntity['flagImageUrl'][]>;
}
