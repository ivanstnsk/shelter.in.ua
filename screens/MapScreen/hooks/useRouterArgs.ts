import React, { useState } from 'react';
// import { City } from '../../../graphql/generated/types';

// import { LoadManager } from '../../../managers';
import { MapScreenRouterArgs, MapScreenStepperSteps, UseRouterArgs } from '../MapScreen.types';

export const useRouterArgs = (query: MapScreenRouterArgs): UseRouterArgs => {
  // const [city, setCity] = useState<City>();

  const [cityCode, placeCode] = query;
  let stepperActiveStep = MapScreenStepperSteps.CITY_SELECT;

  if (cityCode) {
    stepperActiveStep = MapScreenStepperSteps.PLACE_SELECT;
  }
  if (cityCode && placeCode) {
    stepperActiveStep = MapScreenStepperSteps.PLACE_INFO;
  }

  return {
    stepperActiveStep,
    cityCode,
    placeCode,
  }
}