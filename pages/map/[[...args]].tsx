import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import { LoadManager } from '../../managers';
import { ClientOnlyWrapper } from '../../components/ClientOnlyWrapper';
import { City } from '../../graphql/generated/types';
import { MapScreen } from '../../screens/MapScreen';

interface Props {
  args?: Array<string>;
}

const Map: NextPage<Props> = ({
  args = [],
}) => {
  // console.log('router', router);
  // console.log('args', args);
  return (
    <>
      <Head>
        <title>Shelter in UA Map</title>
        <meta name="description" content="Shelter in UA Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientOnlyWrapper>
        <MapScreen args={args} />
      </ClientOnlyWrapper>
    </>
  );
}

export default Map;

interface IParams extends ParsedUrlQuery {
  args: Array<string>;
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const cities = await LoadManager.loadCities();

  const citiesPaths: any[] = [];

  for (let c = 0; c < cities.length; c+= 1) {
    const city = cities[c] as City;
    const places = await LoadManager.loadPlaces(city.code);

    citiesPaths.push({
      params: {
        args: [city.code],
      },
    });

    for (let p = 0; p < places.length; p += 1) {
      const place = places[p]; // TODO: add type

      citiesPaths.push({
        params: {
          args: [city.code, place.code],
        },
      });
    }
  }
  
  const paths = [
    {
      params: {
        args: [],
      },
    },
    ...citiesPaths,
  ];

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<IParams> = async (context) => {
  const { args } = context?.params as IParams;

  return {
    props: {
      args: args ?? [],
    }
  }
}
