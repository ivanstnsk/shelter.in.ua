export type MapScreenRouterArgs = Array<string>;

export enum MapScreenStepperSteps {
  CITY_SELECT,
  PLACE_SELECT,
  PLACE_INFO,
}

export interface UseRouterArgs {
  stepperActiveStep: MapScreenStepperSteps;
  cityCode?: string;
  placeCode?: string;
}