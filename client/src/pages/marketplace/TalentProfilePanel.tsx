import { Currency, Sparkles } from "@/components/shared/icons/Icons";

const TalentProfilePanel = () => {
  return (
    <div className=" h-auto basis-1/3 space-y-6 ">
      <div className="flex gap-2 items-center p-4 bg-foreground rounded-lg">
        <span className="text-green-500">
          <Sparkles />
        </span>

        <h3 className="text-lg font-semibold">Good New! You can now Reorder</h3>
      </div>
      <div className="sticky top-4 h-auto bg-foreground p-4 rounded-lg space-y-6">
        <div className="flex gap-4 items-center p-2">
          <Currency />
          <h3 className="text-xl font-bold">Money Back Guaranteed</h3>
        </div>
        <div className="text-textColor  space-y-4">
          <p className=" ">
            If you pay on web by card, we reserve the amount when you place your
            order but only charge once you have received the video.
          </p>
          <p>
            If you book a video on web with another payment method, we will
            always provide a full refund if the celebrity doesn’t respond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TalentProfilePanel;
