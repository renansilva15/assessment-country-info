import { Module } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { FindAllCountriesUseCase } from 'src/core/domain/country/application/use-cases/find-all-countries.use-case';
import { CountryNagerAndCountriesNowRepository } from 'src/core/infra/api/country-nager-and-countries-now.repository';

@Module({
  controllers: [CountriesController],
  providers: [
    {
      provide: FindAllCountriesUseCase,
      useFactory: () => {
        return new FindAllCountriesUseCase(
          new CountryNagerAndCountriesNowRepository(),
        );
      },
    },
  ],
})
export class CountriesModule {}
