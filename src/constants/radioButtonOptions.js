import {
  Transportation,
  Destination,
  Season,
  Gender,
} from "./userOptionsModel";

export const options = {
  isChildrenOptions: [
    {
      category: "Children",
      inputs: [
        { label: "Yes ", value: "Yes" },
        { label: "No ", value: "No" },
      ],
    },
  ],
  isPetOptions: [
    {
      category: "Pet",
      inputs: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
    },
  ],
  genderOptions: [
    {
      category: "gender",
      inputs: [
        { label: Gender.MALE, value: Gender.MALE },
        { label: Gender.FEMALE, value: Gender.FEMALE },
      ],
    },
  ],
  destinationOptions: [
    {
      category: "destination",
      inputs: [
        { label: Destination.LOCAL, value: Destination.LOCAL },
        { label: Destination.INTERNATIONAL, value: Destination.INTERNATIONAL },
      ],
    },
  ],
  destinationOptions: [
    {
      category: "destination",
      inputs: [
        { label: Destination.LOCAL, value: Destination.LOCAL },
        { label: Destination.INTERNATIONAL, value: Destination.INTERNATIONAL },
      ],
    },
  ],
  transportationOptions: [
    {
      category: "transportation",
      inputs: [
        { label: Transportation.CAR, value: Transportation.CAR },
        { label: Transportation.BUS, value: Transportation.BUS },
        { label: Transportation.PLANE, value: Transportation.PLANE },
      ],
    },
  ],
  seasonOptions: [
    {
      category: "Season",
      inputs: [
        { label: Season.SUMMER, value: Season.SUMMER },
        { label: Season.WINTER, value: Season.WINTER },
        { label: Season.FALL, value: Season.FALL },
        { label: Season.SPRING, value: Season.SPRING },
      ],
    },
  ],
};
