import { FC } from "react";
import LinkButton from "../shared/ui/button/LinkButton";

type Props = {
  price: number;
};
const GigCard: FC<Props> = ({ price }) => {
  return (
    <div className="h-full basis-1/3 space-y-6 md:hidden">
      <div className="sticky top-4 h-auto bg-foreground p-4 rounded-lg space-y-6">
        <div className="flex gap-4 items-center p-2">
          {/* <Currency /> */}
          <div className="text-textColor  space-y-4">
            <h3 className="text-xl font-bold">Money Back Guaranteed</h3>
            <p className=" ">
              If you pay on web by card, we reserve the amount when you place
              your order but only charge once you have received the video.
            </p>
            <p>
              If you book a video on web with another payment method, we will
              always provide a full refund if the celebrity doesn’t respond.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-red-400">
          <LinkButton
            href="book"
            className="w-full p-4 text-lg font-semibold space-x-2"
          >
            Order Now! <span>${price}</span>
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
