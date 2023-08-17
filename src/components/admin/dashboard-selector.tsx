import { capitalizeWord } from "~/lib/helpers/string-helpers";

import dynamic from "next/dynamic";
import { getCarFormData } from "~/lib/admin/queries";
import BookingsCalendar from "./bookings-calendar";
import { getAllBookings } from "~/lib/bookings/queries";

const AddCarForm = dynamic(
  () => import("~/components/common/forms/add-car-form")
);

const AddAccessoryForm = dynamic(
  () => import("~/components/common/forms/add-accessory-form")
);

interface DashboardProps {
  slug?: string;
  session?: { accessToken?: string };
}

function renderDashboard(params = {}, data = {}) {
  const { slug, session } = params;

  switch (slug) {
    // case "cars":
    //   return <AddCarForm carFormData={data} />;
    case "bookings":
      return <div>Bookings List</div>;
    case "calendar":
      return <BookingsCalendar bookings={data} />;
    case "clients":
      return <div>Clients</div>;
    case "accessories":
      return <AddAccessoryForm />;
    case "settings":
      return <div>Settings</div>;
    default:
      return <div>Invalid parameter</div>;
  }
}

// function that will fetch server data for each dashboard view based on param
async function fetchDashboardData(params: {
  slug?: string;
  session?: { accessToken?: string };
}) {
  const { slug } = params;

  switch (slug) {
    case "cars":
    // TODO: replace with real jwt
    // const carFormData = await getCarFormData({ accessToken });
    // return carFormData;
    case "calendar":
    // const bookings = await getAllBookings({ accessToken });
    // return bookings;
    default:
      return {};
  }
}

export default async function DashboardSelector({
  slug,
  session,
}: DashboardProps) {
  // const context = await fetchDashboardData({ slug, session });

  return (
    <main className="admin-main-content">
      <h3>{capitalizeWord(slug)} Dashboard</h3>
      <section className="admin-content-wrapper">
        {renderDashboard({ slug, session })}
      </section>
    </main>
  );
}
