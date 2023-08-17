interface NewAccessoryFormValues {
  name: string;
  price_per_day: number;
}

export interface NewAccessoryRequest {
  accessory: NewAccessoryFormValues;
}
