import BookingPanel from "@components/booking/bookingForms/BookingPanel";
import CheckOutPage from "@components/checkout/CheckOutPage";

const Checkout = () => {
  return (
    <main className="container relative flex flex-col-reverse h-auto gap-6 p-8 mx-auto md:flex-row md:p-0">
      <CheckOutPage />
      <BookingPanel />
    </main>
  );
};

export default Checkout;
