'use client';

import { ROUTE_COUNTRIES } from '@/constants/routes';
import { fetcher } from '@/utils/fetcher';
import { Table } from 'lucide-react';
import useSWR from 'swr';
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './ui/table';

interface CountryMainInfo {
  commonName: string;
  countryCode: string;
}

export function CountriesTable() {
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
  );
}
