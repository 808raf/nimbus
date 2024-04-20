import React from "react";
import { Spinner } from "@/components/ui/spinner";

const SpinnerWithText = () => {
  return (
    <div className="flex items-center gap-3">
      <Spinner className="text-secondary-foreground">
        <span className="ml-3 text-primary scroll-m-20 text-xl font-semibold tracking-tight">
          Loading...
        </span>
      </Spinner>
    </div>
  );
};

export default SpinnerWithText;
