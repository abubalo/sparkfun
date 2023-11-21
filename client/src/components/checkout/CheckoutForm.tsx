import {
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import { ChangeEvent, useState } from "react";
import Button from "../shared/ui/button/Button";

const CheckoutForm = () => {
  const stripe: Stripe | null = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [isProccessing, setIsProccessing] = useState(false);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!stripe || !elements) {
        return;
      }
      // const { error: submitError } = await elements.submit();

      // if (submitError) {
      //   setErrorMessage(submitError.message);
      //   return;
      // }

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "/completion",
        },
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setIsProccessing(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Error from stripe form: ", error.message);
    }
  };
  return (
    <main className="w-full h-full flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        id="payment-form"
        className="w-[450px] p-8 bg-white space-y-6 rounded-md"
      >
        <PaymentElement />
        <div className="flex justify-end">
          <Button type="submit" id="submit" disabled={isProccessing}>
            {isProccessing ? "Proccessing..." : "Pay now"}
          </Button>
        </div>
        {errorMessage ? <div>{errorMessage}</div> : null}
      </form>
    </main>
  );
};

export default CheckoutForm;
