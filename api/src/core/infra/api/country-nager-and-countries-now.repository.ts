import { FindAllCountriesUseCaseOutputDto } from '../../domain/country/application/dto/find-all-countries.dto';
import {
  CountryMainInfo,
  CountryRepository,
} from '../../domain/country/enterprise/repositories/country.repository';
import { sharedAxiosInstance } from '../lib/axios';

const NAGER_GET_AVAILABLE_COUNTRIES_URL =
  'https://date.nager.at/api/v3/AvailableCountries';

export class CountryNagerAndCountriesNowRepository
  implements CountryRepository
{
  private getAvailableCountriesMapper(
    availableCountries,
  ): FindAllCountriesUseCaseOutputDto[] {
    return availableCountries.map(
      (country: any): FindAllCountriesUseCaseOutputDto => {
        return {
          commonName: country.name,
          countryCode: country.countryCode,
        };
      },
    );
  }

  async findAll(): Promise<CountryMainInfo[]> {
    try {
      const { data: availableCountries } = await sharedAxiosInstance.get(
        NAGER_GET_AVAILABLE_COUNTRIES_URL,
      );

      return this.getAvailableCountriesMapper(availableCountries);
    } catch (error) {
      // TODO: Add the error to a proper logger and return a more clear 500 exception to the user instead of just rethrow and add it to the swagger
      console.error(error);

      throw error;
    }
  }
}
