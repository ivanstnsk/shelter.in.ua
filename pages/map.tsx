import type { NextPage } from 'next'
import Head from 'next/head'

import { ClientOnlyWrapper } from '../components/ClientOnlyWrapper';
import { MapScreen } from '../screens/MapScreen';

const Map: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shelter in UA Map</title>
        <meta name="description" content="Shelter in UA Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientOnlyWrapper>
        <MapScreen />
      </ClientOnlyWrapper>
    </>
  )
}

export default Map;
