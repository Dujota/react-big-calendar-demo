/**
 * {
    "id": 1,
    "car_id": 1,
    "user_id": 1,
    "start_date": "2023-04-30T14:16:35.385-04:00",
    "end_date": "2023-05-10T14:16:35.385-04:00",
    "total_price": "500.0",
    "status": "pending",
    "created_at": "2023-04-30T14:16:35.457-04:00",
    "updated_at": "2023-04-30T14:16:35.457-04:00"
}
 */

interface ApiResponse {
  id: number;
  car_id: number;
  renter_id: number;
  delivery_option_id: number;
  start_date: string;
  end_date: string;
  status: string;
  total_price: string;
  car_rental_price: string;
  extra_options_cost: string | null;
  delivery_options_cost: string;
  pickup_location: string | null;
  return_location: string | null;
  flight_number: string;
  terminal: string;
  name: string;
  phone_number: string;
  email: string;
  created_at: string;
  updated_at: string;
  car: {
    id: number;
    year: number;
    color: string;
    mileage: number;
    license_plate: string;
    vin: string;
    passengers: number;
    description: string;
    weekly_discount: number;
    monthly_discount: number;
    price_per_day: string;
    owner_id: number;
    created_at: string;
    updated_at: string;
    location_id: number;
    make_id: number;
    model_id: number;
    make: {
      id: number;
      name: string;
      label: string;
      created_at: string;
      updated_at: string;
    };
    model: {
      id: number;
      make_id: number;
      name: string;
      label: string;
      created_at: string;
      updated_at: string;
    };
  };
  delivery_option: {
    id: number;
    name: string;
    label: string;
    price: string;
    created_at: string;
    updated_at: string;
  };
  renter: {
    id: number;
    name: string;
    email: string;
  };
}

// start_date: string;
// end_date: string;
// // total_price: string;
// car_id: number;
// user_id?: number;
export type NewBookingRequest = {
  booking: {
    car_id: number;
    start_date: string;
    end_date: string;
    pickup_location: string | null;
    return_location: string | null;
    delivery_option_id: number;
    flight_number: string | null;
    terminal: string | null;
    pickup_time: string;
    return_time: string;
    name: string;
    email: string;
    phone_number: string;
  };
};

interface Booking {
  id?: number;
  car_id?: number;
  renter_id?: number;
  delivery_option_id?: number;
  start_date?: string;
  end_date?: string;
  status?: string;
  total_price?: string;
  car_rental_price?: string;
  extra_options_cost?: null | string;
  delivery_options_cost?: string;
  pickup_location?: null | string;
  return_location?: null | string;
  return_time?: string;
  pickup_time?: string;
  flight_number?: string;
  terminal?: string;
  name?: string;
  phone_number?: string;
  email?: string;
  created_at?: string;
  updated_at?: string;
  car?: {
    id?: number;
    year?: number;
    color?: string;
    mileage?: number;
    license_plate?: string;
    vin?: string;
    passengers?: number;
    description?: string;
    weekly_discount?: number;
    monthly_discount?: number;
    price_per_day?: string;
    owner_id?: number;
    created_at?: string;
    updated_at?: string;
    location_id?: number;
    make_id?: number;
    model_id?: number;
    make?: {
      id?: number;
      name?: string;
      label?: string;
      created_at?: string;
      updated_at?: string;
    };
    model?: {
      id?: number;
      make_id?: number;
      name?: string;
      label?: string;
      created_at?: string;
      updated_at?: string;
    };
    location?: {
      street?: string;
      city?: string;
      state?: string;
      postal_code?: string;
    };
  };
  delivery_option?: {
    id?: number;
    name?: string;
    label?: string;
    price?: string;
    created_at?: string;
    updated_at?: string;
  };
  renter?: {
    id?: number;
    name?: string;
    email?: string;
  };
}
