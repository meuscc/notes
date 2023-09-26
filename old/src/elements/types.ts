import { ComponentProps } from "solid-js";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "m-i": ComponentProps<"div"> & { m?: any };
      "m-b": ComponentProps<"div"> & { m?: any };
      "c-i": ComponentProps<"div"> & { c?: any; l?: any };
      "c-b": ComponentProps<"div"> & { c?: any; l?: any };
      "h-1": ComponentProps<"h1">;
      "h-2": ComponentProps<"h2">;
      "h-3": ComponentProps<"h3">;
      "h-4": ComponentProps<"h4">;
      "h-5": ComponentProps<"h5">;
      "h-6": ComponentProps<"h6">;
    }
  }
}
