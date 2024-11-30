'use client';

import {
  Table,
  TableCaption,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { ROUTE_COUNTRIES } from '@/constants/routes';
import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';

interface CountryMainInfo {
  commonName: string;
  countryCode: string;
}

export default function Home() {
  const {
    data: dataCountriesMainInfo,
    isLoading: isLoadingCountriesMainInfo,
    error: errorCountriesMainInfo,
  } = useSWR<CountryMainInfo[]>(ROUTE_COUNTRIES, fetcher);

  if (isLoadingCountriesMainInfo) {
    return <div>Loading...</div>;
  }

  if (errorCountriesMainInfo || !dataCountriesMainInfo) {
    return <div>Error loading countries: {errorCountriesMainInfo.message}</div>;
  }

  return (
    <section className="flex justify-center p-4">
      <div className="max-w-screen-md w-full flex flex-col justify-center gap-16">
        <h1 className="text-5xl text-center">Country Info</h1>
        <div className="max-h-[400px] md:max-h-[500px] overflow-y-auto">
          <Table>
            <TableCaption>Country List</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Country Name</TableHead>
                <TableHead>Country Code</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataCountriesMainInfo.map(
                (country: { commonName: string; countryCode: string }) => (
                  <TableRow key={country.countryCode}>
                    <TableCell>{country.commonName}</TableCell>
                    <TableCell>{country.countryCode}</TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
