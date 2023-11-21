import BookingPanel from "@/components/booking/bookingForms/BookingPanel";
import CheckOutPage from "@/components/checkout/CheckOutPage";

const Checkout = () => {
  return (
    <main className="container mx-auto relative h-auto flex flex-col-reverse gap-6 p-8 md:flex-row md:p-0">
      <CheckOutPage />
      <BookingPanel />
    </main>
  );
};

export default Checkout;
