import { useNavigate } from "react-router-dom";
import { PadLock } from "../shared/icons/Icons";
import Button from "../shared/ui/button/Button";

const CheckOutPage = () => {
  const navigate = useNavigate();

  const handleTakeToPaymentPage = ()=>{
    navigate("/payment")
  }

  return (
    <div className="basis-4/5 space-y-8">
      <div>
        <div className="border-y border-slate-500 py-4">
          <h3 className="text-lg font-semibold text-slate-300">
            Order details
          </h3>
          <div className="flex justify-between items-center text-slate-500">
            <p>Personalized Video</p>
            <p className="font-semibold">$50</p>
          </div>
        </div>
        <div className="border-b border-slate-500 py-4 space-y-4">
          <div className="flex justify-between items-center text-slate-500">
            <p className="font-semibold text-slate-300">Service Fee</p>
            <p className="font-semibold">$50</p>
          </div>
          <div className="flex justify-between items-center text-slate-500">
            <p className="font-semibold text-slate-300">Sales Tax</p>
            <p className="font-semibold">Free</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-slate-500 py-4">
          <p className="text-lg font-semibold text-slate-300">Total</p>
          <p className="font-semibold">$50</p>
        </div>
      </div>
      <Button
        type="submit"
        onClick={handleTakeToPaymentPage}
        className="w-full p-3 rounded-full flex items-center justify-center text-gray-300"
      >
        <PadLock /> Book now
      </Button>
    </div>
  );
};

export default CheckOutPage;
