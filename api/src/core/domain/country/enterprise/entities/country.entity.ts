interface CountryEntityProps {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders?: Omit<CountryEntityProps, 'borders'>[];
  flagImageUrl?: string;
}

export class CountryEntity {
  readonly commonName: string;
  readonly officialName: string;
  readonly countryCode: string;
  readonly region: string;
  readonly borders: Omit<CountryEntity, 'borders'>[];
  readonly flagImageUrl: string | null;

  constructor(props: CountryEntityProps) {
    Object.assign(this, {
      ...props,
      borders: (props.borders ?? []).map((country) => {
        return new CountryEntity(country);
      }),
      flagImageUrl: props.flagImageUrl ?? null,
    });
  }
}
