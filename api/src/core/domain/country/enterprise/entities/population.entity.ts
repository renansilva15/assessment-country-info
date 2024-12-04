interface PopulationByYear {
  year: string;
  quantity: string;
}

interface PopulationEntityProps {
  populationByYears: PopulationByYear[];
  countryCode: string;
}

export class PopulationEntity {
  readonly populationByYears: string;
  readonly countryCode: string;

  constructor(props: PopulationEntityProps) {
    Object.assign(this, {
      ...props,
    });
  }
}
