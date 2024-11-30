import { ApiProperty } from '@nestjs/swagger';

export class FindAllCountriesUseCaseOutputDto {
  @ApiProperty()
  commonName: string;

  @ApiProperty()
  countryCode: string;
}
