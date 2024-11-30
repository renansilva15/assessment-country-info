import { CountryEntity } from '../entities/country.entity';

export type CountryMainInfo = Pick<CountryEntity, 'commonName' | 'countryCode'>;

export interface CountryRepository {
  findAll(): Promise<CountryMainInfo[]>;
}
