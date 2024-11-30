interface CountryEntityProps {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders?: Omit<CountryEntityProps, 'borders'>[];
}

export class CountryEntity {
  readonly commonName: string;
  readonly officialName: string;
  readonly countryCode: string;
  readonly region: string;
  readonly borders: Omit<CountryEntity, 'borders'>[];

  constructor(props: CountryEntityProps) {
    Object.assign(this, {
      ...props,
      borders: (props.borders ?? []).map((country) => {
        return new CountryEntity(country);
      }),
    });
  }
}
