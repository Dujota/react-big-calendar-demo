/**
 * {
      "id": 1,
      "make": "Toyota",
      "model": "Camry",
      "year": 2019,
      "color": "white",
      "mileage": 100000,
      "price_per_day": "50.0",
      "user_id": 1,
      "created_at": "2023-04-30T14:16:35.433-04:00",
      "updated_at": "2023-04-30T14:16:35.433-04:00"
  }
 */

export interface Car {
  id: number;
  user_id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price_per_day: string;
  created_at: string;
  updated_at: string;
}
export type NewCarFormValues = {
  make_id: number;
  model_id: number;
  year: number;
  color: string;
  mileage: number;
  license_plate: string;
  description: string;
  price_per_day: number;
  location_id: number;
  weekly_discount?: number | null;
  monthly_discount?: number | null;
  vin?: string | null;
  owner_id: number;
};

export type NewCarRequest = {
  car: NewCarFormValues;
};
