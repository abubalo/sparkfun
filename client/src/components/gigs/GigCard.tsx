import { FC } from "react";
import LinkButton from "../shared/ui/button/LinkButton";

type Props = {
  price: number;
};
const GigCard: FC<Props> = ({ price }) => {
  return (
    <div className="h-full space-y-6 basis-1/3 md:hidden">
      <div className="sticky h-auto p-4 space-y-6 rounded-lg top-4 bg-foreground">
        <div className="flex items-center gap-4 p-2">
          {/* <Currency /> */}
          <div className="space-y-4 text-textColor">
            <h3 className="text-xl font-bold">Money Back Guaranteed</h3>
            <p className="">
              If you pay on web by card, we reserve the amount when you place
              your order but only charge once you have received the video.
            </p>
            <p>
              If you book a video on web with another payment method, we will
              always provide a full refund if the celebrity doesn’t respond.
            </p>
          </div>
        </div>
        <div className="bg-red-400 rounded-lg">
          <LinkButton
            href="/book"
            className="w-full p-4 space-x-2 text-lg font-semibold"
          >
            Order Now! <span>${price}</span>
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
