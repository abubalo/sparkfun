import BookingPanel from "@/components/booking/bookingForms/BookingPanel";
import RenderBookingForm from "@/components/booking/bookingForms/RenderBookingForm";

const Booking = () => {
  return (
    <main className="container mx-auto flex flex-col h-auto p-4   md:flex-row-reverse md:-p-0  md:gap-8">
      <BookingPanel />
      <RenderBookingForm />
    </main>
  );
};

export default Booking;
