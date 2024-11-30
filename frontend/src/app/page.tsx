import { CountriesTable } from '@/components/countriesTable';

export default function Home() {
  return (
    <section className="flex justify-center p-4">
      <div className="max-w-screen-md w-full flex flex-col justify-center gap-16">
        <h1 className="text-5xl text-center">Country Info</h1>
        <div className="max-h-[400px] md:max-h-[500px] overflow-y-auto">
          <CountriesTable />
        </div>
      </div>
    </section>
  );
}
