import React from 'react';
import Head from 'next/head';

import { MapView } from '../../components/MapView';
import { Typography } from '../../components/Typography';

import { CitiesList } from './components/CitiesList';
import styles from './MapScreen.module.scss';

interface Props {}

export const MapScreenView: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shelter in UA Map</title>
        <meta name="description" content="Shelter in UA Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.headContainer}>
            <Typography variant="h1" component="h1">Виберіть місто:</Typography>
            {/* <Input placeholder="Введіть назву" />   */}
          </div>
          {/* <Link href="/">
            <a><Typography variant="body3" component="div">Повернутись назад</Typography></a>
          </Link> */}
          <CitiesList />
          {/* <Divider />
          <Typography variant="h2" component="h2">Додаткова інформація</Typography>
          <Button onClick={() => {}}>Створити маршрут</Button> */}
        </div>
        <div className={styles.right}>
          <MapView />
        </div>
      </main>
    </div>
  );
};
