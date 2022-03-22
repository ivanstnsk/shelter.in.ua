import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';

import styles from '../styles/Map.module.scss'

import { MapView } from '../components/MapView';
import { Input } from '../components/Input';
import { Typography } from '../components/Typography';
import { Divider } from '../components/Divider';
import { Button } from '../components/Button';
import { ListItem } from '../components/ListItem';

const Map: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shelter in UA Map</title>
        <meta name="description" content="Shelter in UA Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.left}>
          {/* <Link href="/">
            <a><Typography variant="body3" component="div">Повернутись назад</Typography></a>
          </Link> */}
          <Typography variant="h1" component="h1">Виберіть місто:</Typography>
          <Input placeholder="Введіть назву" />
          <ListItem href="/">
            <Typography variant="body1" component="div">місто 1</Typography>
          </ListItem>
          {/* <Divider />
          <Typography variant="h2" component="h2">Додаткова інформація</Typography>
          <Button onClick={() => {}}>Створити маршрут</Button> */}
        </div>
        <div className={styles.right}>
          <MapView />
        </div>
      </main>
    </div>
  )
}

export default Map
