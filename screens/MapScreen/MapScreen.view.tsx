import React from 'react';
import Head from 'next/head';

import { MapView } from '../../components/MapView';

import { CitiesList } from './components/CitiesList';
import { PlacesList } from './components/PlacesList';
import { MapScreenStepperSteps } from './MapScreen.types';
import styles from './MapScreen.module.scss';

interface Props {
  stepperActiveStep: MapScreenStepperSteps;
  cityCode?: string;
}

export const MapScreenView: React.FC<Props> = ({
  stepperActiveStep,
  cityCode,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shelter in UA Map</title>
        <meta name="description" content="Shelter in UA Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.left}>
          {stepperActiveStep === MapScreenStepperSteps.CITY_SELECT && (
            <CitiesList />
          )}
          {stepperActiveStep === MapScreenStepperSteps.PLACE_SELECT && (
            <PlacesList cityCode={cityCode} />
          )}
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
