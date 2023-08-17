
import BookingsCalendar from "~/components/admin/bookings-calendar";

const bookings = [
  {
      "id": 6,
      "car_id": 3,
      "renter_id": 3,
      "delivery_option_id": 2,
      "start_date": "2023-07-22T00:00:00.000-04:00",
      "end_date": "2023-08-05T00:00:00.000-04:00",
      "status": "pending",
      "total_price": "1155.0",
      "car_rental_price": "1120.0",
      "extra_options_cost": null,
      "delivery_options_cost": "35.0",
      "pickup_location": null,
      "return_location": "option1",
      "return_time": "16:06",
      "pickup_time": "16:06",
      "flight_number": "a2323",
      "terminal": "3",
      "name": "dssads",
      "phone_number": "(213) 132-3132",
      "email": "test3@test.com",
      "created_at": "2023-07-12T17:11:26.501-04:00",
      "updated_at": "2023-07-12T17:11:26.501-04:00",
      "car": {
          "id": 3,
          "year": 2020,
          "color": "red",
          "mileage": 10000,
          "license_plate": "ELEC123",
          "vin": "5YJ3E1EA6KF000001",
          "passengers": 2,
          "description": "Experience the future of driving with this electric vehicle.",
          "weekly_discount": 0,
          "monthly_discount": 0,
          "price_per_day": "80.0",
          "owner_id": 1,
          "created_at": "2023-07-12T16:50:37.363-04:00",
          "updated_at": "2023-07-12T16:50:37.363-04:00",
          "location_id": 2,
          "make_id": 18,
          "model_id": 157,
          "make": {
              "id": 18,
              "name": "toyota",
              "label": "Toyota",
              "created_at": "2023-07-12T16:50:35.412-04:00",
              "updated_at": "2023-07-12T16:50:35.412-04:00"
          },
          "model": {
              "id": 157,
              "make_id": 18,
              "name": "prius",
              "label": "Prius",
              "created_at": "2023-07-12T16:50:35.827-04:00",
              "updated_at": "2023-07-12T16:50:35.827-04:00"
          }
      },
      "delivery_option": {
          "id": 2,
          "name": "cancun_airport",
          "label": "Aeroport Cancun ($35)",
          "price": "35.0",
          "created_at": "2023-07-12T16:50:37.389-04:00",
          "updated_at": "2023-07-12T16:50:37.389-04:00"
      },
      "renter": {
          "id": 3,
          "name": "Steve Smith",
          "email": "steve@test.com"
      }
  },
  {
      "id": 5,
      "car_id": 4,
      "renter_id": 5,
      "delivery_option_id": 1,
      "start_date": "2023-07-12T16:50:37.397-04:00",
      "end_date": "2023-07-27T16:50:37.397-04:00",
      "status": "pending",
      "total_price": "900.0",
      "car_rental_price": "900.0",
      "extra_options_cost": null,
      "delivery_options_cost": "0.0",
      "pickup_location": null,
      "return_location": null,
      "return_time": "16:06",
      "pickup_time": "16:06",
      "flight_number": null,
      "terminal": null,
      "name": "Don Lemon",
      "phone_number": "12131234433",
      "email": "don@test.com",
      "created_at": "2023-07-12T16:50:37.427-04:00",
      "updated_at": "2023-07-12T16:50:37.427-04:00",
      "car": {
          "id": 4,
          "year": 2017,
          "color": "black",
          "mileage": 60000,
          "license_plate": "TRK456",
          "vin": "1FTEW1CF8HKC30259",
          "passengers": 2,
          "description": "Powerful truck for towing and carrying heavy loads, great for outdoor adventures.",
          "weekly_discount": 0,
          "monthly_discount": 0,
          "price_per_day": "60.0",
          "owner_id": 1,
          "created_at": "2023-07-12T16:50:37.367-04:00",
          "updated_at": "2023-07-12T16:50:37.367-04:00",
          "location_id": 1,
          "make_id": 6,
          "model_id": 56,
          "make": {
              "id": 6,
              "name": "ford",
              "label": "Ford",
              "created_at": "2023-07-12T16:50:35.382-04:00",
              "updated_at": "2023-07-12T16:50:35.382-04:00"
          },
          "model": {
              "id": 56,
              "make_id": 6,
              "name": "f-150",
              "label": "F-150",
              "created_at": "2023-07-12T16:50:35.602-04:00",
              "updated_at": "2023-07-12T16:50:35.602-04:00"
          },
          "location": {
              "street": "123 Main St",
              "city": "New York",
              "state": "NY",
              "postal_code": "10001"
          }
      },
      "delivery_option": {
          "id": 1,
          "name": "not_required",
          "label": "Not required",
          "price": "0.0",
          "created_at": "2023-07-12T16:50:37.386-04:00",
          "updated_at": "2023-07-12T16:50:37.386-04:00"
      },
      "renter": {
          "id": 5,
          "name": "Don Lemon",
          "email": "don@test.com"
      }
  },
  {
      "id": 4,
      "car_id": 3,
      "renter_id": 4,
      "delivery_option_id": 4,
      "start_date": "2023-07-12T16:50:37.397-04:00",
      "end_date": "2023-07-21T16:50:37.397-04:00",
      "status": "pending",
      "total_price": "755.0",
      "car_rental_price": "720.0",
      "extra_options_cost": null,
      "delivery_options_cost": "35.0",
      "pickup_location": "Calle 30, Puerto Aventuras",
      "return_location": "Calle 30, Puerto Aventuras",
      "return_time": "16:06",
      "pickup_time": "16:06",
      "flight_number": null,
      "terminal": null,
      "name": "Bob Hope",
      "phone_number": "12131455423",
      "email": "bob@test.com",
      "created_at": "2023-07-12T16:50:37.423-04:00",
      "updated_at": "2023-07-12T16:50:37.423-04:00",
      "car": {
          "id": 3,
          "year": 2020,
          "color": "red",
          "mileage": 10000,
          "license_plate": "ELEC123",
          "vin": "5YJ3E1EA6KF000001",
          "passengers": 2,
          "description": "Experience the future of driving with this electric vehicle.",
          "weekly_discount": 0,
          "monthly_discount": 0,
          "price_per_day": "80.0",
          "owner_id": 1,
          "created_at": "2023-07-12T16:50:37.363-04:00",
          "updated_at": "2023-07-12T16:50:37.363-04:00",
          "location_id": 2,
          "make_id": 18,
          "model_id": 157,
          "make": {
              "id": 18,
              "name": "toyota",
              "label": "Toyota",
              "created_at": "2023-07-12T16:50:35.412-04:00",
              "updated_at": "2023-07-12T16:50:35.412-04:00"
          },
          "model": {
              "id": 157,
              "make_id": 18,
              "name": "prius",
              "label": "Prius",
              "created_at": "2023-07-12T16:50:35.827-04:00",
              "updated_at": "2023-07-12T16:50:35.827-04:00"
          }
      },
      "delivery_option": {
          "id": 4,
          "name": "outside_pdc",
          "label": "Outside Playa del Carmen ($35)",
          "price": "35.0",
          "created_at": "2023-07-12T16:50:37.393-04:00",
          "updated_at": "2023-07-12T16:50:37.393-04:00"
      },
      "renter": {
          "id": 4,
          "name": "Bob Hope",
          "email": "bob@test.com"
      }
  },
  {
      "id": 3,
      "car_id": 1,
      "renter_id": 3,
      "delivery_option_id": 2,
      "start_date": "2023-07-23T16:50:37.397-04:00",
      "end_date": "2023-08-31T16:50:37.397-04:00",
      "status": "active",
      "total_price": "1595.0",
      "car_rental_price": "1560.0",
      "extra_options_cost": null,
      "delivery_options_cost": "35.0",
      "pickup_location": null,
      "return_location": null,
      "return_time": "16:06",
      "pickup_time": "16:06",
      "flight_number": "AA123",
      "terminal": "1",
      "name": "Steve Smith",
      "phone_number": "12155312399",
      "email": "steve@test.com",
      "created_at": "2023-07-12T16:50:37.420-04:00",
      "updated_at": "2023-07-12T16:50:37.420-04:00",
      "car": {
          "id": 1,
          "year": 2015,
          "color": "silver",
          "mileage": 45000,
          "license_plate": "ABC123",
          "vin": "1HGBH41JXMN109186",
          "passengers": 2,
          "description": "A reliable and fuel-efficient sedan, perfect for city driving and road trips.",
          "weekly_discount": 0,
          "monthly_discount": 0,
          "price_per_day": "40.0",
          "owner_id": 1,
          "created_at": "2023-07-12T16:50:37.351-04:00",
          "updated_at": "2023-07-12T16:50:37.351-04:00",
          "location_id": 1,
          "make_id": 18,
          "model_id": 155,
          "make": {
              "id": 18,
              "name": "toyota",
              "label": "Toyota",
              "created_at": "2023-07-12T16:50:35.412-04:00",
              "updated_at": "2023-07-12T16:50:35.412-04:00"
          },
          "model": {
              "id": 155,
              "make_id": 18,
              "name": "camry",
              "label": "Camry",
              "created_at": "2023-07-12T16:50:35.822-04:00",
              "updated_at": "2023-07-12T16:50:35.822-04:00"
          }
      },
      "delivery_option": {
          "id": 2,
          "name": "cancun_airport",
          "label": "Aeroport Cancun ($35)",
          "price": "35.0",
          "created_at": "2023-07-12T16:50:37.389-04:00",
          "updated_at": "2023-07-12T16:50:37.389-04:00"
      },
      "renter": {
          "id": 3,
          "name": "Steve Smith",
          "email": "steve@test.com"
      }
  },
  {
      "id": 2,
      "car_id": 4,
      "renter_id": 5,
      "delivery_option_id": 3,
      "start_date": "2023-08-01T16:50:37.396-04:00",
      "end_date": "2023-09-15T16:50:37.396-04:00",
      "status": "pending",
      "total_price": "2715.0",
      "car_rental_price": "2700.0",
      "extra_options_cost": null,
      "delivery_options_cost": "15.0",
      "pickup_location": "Calle 10, Playa del Carmen, Quintana Roo, Mexico",
      "return_location": "Calle 10, Playa del Carmen, Quintana Roo, Mexico",
      "return_time": "16:06",
      "pickup_time": "16:06",
      "flight_number": null,
      "terminal": null,
      "name": "Don Lemon",
      "phone_number": "12131234433",
      "email": "don@test.com",
      "created_at": "2023-07-12T16:50:37.414-04:00",
      "updated_at": "2023-07-12T16:50:37.414-04:00",
      "car": {
          "id": 4,
          "year": 2017,
          "color": "black",
          "mileage": 60000,
          "license_plate": "TRK456",
          "vin": "1FTEW1CF8HKC30259",
          "passengers": 2,
          "description": "Powerful truck for towing and carrying heavy loads, great for outdoor adventures.",
          "weekly_discount": 0,
          "monthly_discount": 0,
          "price_per_day": "60.0",
          "owner_id": 1,
          "created_at": "2023-07-12T16:50:37.367-04:00",
          "updated_at": "2023-07-12T16:50:37.367-04:00",
          "location_id": 1,
          "make_id": 6,
          "model_id": 56,
          "make": {
              "id": 6,
              "name": "ford",
              "label": "Ford",
              "created_at": "2023-07-12T16:50:35.382-04:00",
              "updated_at": "2023-07-12T16:50:35.382-04:00"
          },
          "model": {
              "id": 56,
              "make_id": 6,
              "name": "f-150",
              "label": "F-150",
              "created_at": "2023-07-12T16:50:35.602-04:00",
              "updated_at": "2023-07-12T16:50:35.602-04:00"
          },
          "location": {
              "street": "123 Main St",
              "city": "New York",
              "state": "NY",
              "postal_code": "10001"
          }
      },
      "delivery_option": {
          "id": 3,
          "name": "pdc",
          "label": "Playa del Carmen ($15)",
          "price": "15.0",
          "created_at": "2023-07-12T16:50:37.392-04:00",
          "updated_at": "2023-07-12T16:50:37.392-04:00"
      },
      "renter": {
          "id": 5,
          "name": "Don Lemon",
          "email": "don@test.com"
      }
  },
  {
      "id": 1,
      "car_id": 1,
      "renter_id": 2,
      "delivery_option_id": 1,
      "start_date": "2023-07-07T16:50:37.395-04:00",
      "end_date": "2023-07-22T16:50:37.395-04:00",
      "status": "pending",
      "total_price": "600.0",
      "car_rental_price": "600.0",
      "extra_options_cost": null,
      "delivery_options_cost": "0.0",
      "pickup_location": null,
      "return_location": null,
      "return_time": "16:06",
      "pickup_time": "16:06",
      "flight_number": null,
      "terminal": null,
      "name": "Jane Doe",
      "phone_number": "12131222377",
      "email": "jane@test.com",
      "created_at": "2023-07-12T16:50:37.407-04:00",
      "updated_at": "2023-07-12T16:50:37.407-04:00",
      "car": {
          "id": 1,
          "year": 2015,
          "color": "silver",
          "mileage": 45000,
          "license_plate": "ABC123",
          "vin": "1HGBH41JXMN109186",
          "passengers": 2,
          "description": "A reliable and fuel-efficient sedan, perfect for city driving and road trips.",
          "weekly_discount": 0,
          "monthly_discount": 0,
          "price_per_day": "40.0",
          "owner_id": 1,
          "created_at": "2023-07-12T16:50:37.351-04:00",
          "updated_at": "2023-07-12T16:50:37.351-04:00",
          "location_id": 1,
          "make_id": 18,
          "model_id": 155,
          "make": {
              "id": 18,
              "name": "toyota",
              "label": "Toyota",
              "created_at": "2023-07-12T16:50:35.412-04:00",
              "updated_at": "2023-07-12T16:50:35.412-04:00"
          },
          "model": {
              "id": 155,
              "make_id": 18,
              "name": "camry",
              "label": "Camry",
              "created_at": "2023-07-12T16:50:35.822-04:00",
              "updated_at": "2023-07-12T16:50:35.822-04:00"
          }
      },
      "delivery_option": {
          "id": 1,
          "name": "not_required",
          "label": "Not required",
          "price": "0.0",
          "created_at": "2023-07-12T16:50:37.386-04:00",
          "updated_at": "2023-07-12T16:50:37.386-04:00"
      },
      "renter": {
          "id": 2,
          "name": "Jane Doe",
          "email": "jane@test.com"
      }
  }
]

export default async function Home() {
  // const cars = (await getAllCars()) as Car[];

  return (
    <main>
      {/* <section className="hero">
        <div className="hero-inner wrapper">
          <div className="hero-text text-white">
            <h2 className="mb-12">
              Напишите нам и мы сделаем вам лучшее предложение!
            </h2>
            <h5>Удобная аренда Автомобилей в Канкуне!</h5>
            - Доставка
            <br />
            - Свежая техника в отличном состоянии <br />
            - Страховка от повреждений <br />
            - Полное сопровождение по всем вопросам для комфортного отдыха!
            <br />
          </div>
          <div className="hero-image">
            <Image
              src="/cactus.png"
              alt="Cactus"
              width="400"
              height="400"
            ></Image>
          </div>
        </div>
      </section>

      <section className="page-search-form">
        <SearchCarForm />
      </section>

      <section className="wrapper">
        <div className="mt-8 grid grid-cols-6 gap-4">
          <div className="col-span-6 md:col-span-4">
            <Banner
              headline={"Hotel Delivery"}
              text={"We will deliver your car to your hotel"}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <Banner
              headline={"Low Prices"}
              text={"We have discounts"}
              type={"secondary"}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <Banner
              headline={"24/7 Support"}
              text={"Always eager to help"}
              type={"secondary"}
            />
          </div>
        </div>
      </section>

      <section className="home-cars-list cars wrapper">
        <h2>Popular Cars</h2>
        <div className="cars-list">
          <CarsList cars={cars} />
        </div>
      </section> */}
      <BookingsCalendar bookings={bookings}/>
    </main>
  );
}
