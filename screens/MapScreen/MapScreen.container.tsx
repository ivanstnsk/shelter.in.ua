import React from 'react';

import { MapScreenView } from './MapScreen.view';

interface Props {
  args?: Array<string>;
}

export const MapScreenContainer: React.FC<Props> = ({
  args,
}) => {
  return (
    <>
    <div>{JSON.stringify(args)}</div>
    <MapScreenView />
    </>
  );
}