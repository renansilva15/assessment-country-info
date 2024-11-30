import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FindAllCountriesUseCaseOutputDto } from 'src/core/domain/country/application/dto/find-all-countries.dto';
import { FindAllCountriesUseCase } from 'src/core/domain/country/application/use-cases/find-all-countries.use-case';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
  constructor(
    private readonly findAllCountriesUseCase: FindAllCountriesUseCase,
  ) {}

  @Get()
  @ApiOkResponse({
    description: 'Returns an array of countries',
    type: FindAllCountriesUseCaseOutputDto,
  })
  findAll() {
    return this.findAllCountriesUseCase.execute();
  }
}
