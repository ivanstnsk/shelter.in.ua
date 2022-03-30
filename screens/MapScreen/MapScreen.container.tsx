import React from 'react';

import { useRouterArgs } from './hooks';
import { MapScreenRouterArgs } from './MapScreen.types';
import { MapScreenView } from './MapScreen.view';

interface Props {
  args?: MapScreenRouterArgs;
}

export const MapScreenContainer: React.FC<Props> = ({
  args = [],
}) => {
  const { stepperActiveStep, cityCode } = useRouterArgs(args);

  console.log(stepperActiveStep)

  return (
    <MapScreenView
      stepperActiveStep={stepperActiveStep}
      cityCode={cityCode}
    />
  );
}