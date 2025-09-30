import * as React from "react";

import { cn } from "@/lib/utils";

type LazyImageProps = Omit<React.ComponentPropsWithoutRef<"img">, "loading" | "decoding"> & {
  containerClassName?: string;
  skeletonClassName?: string;
};

const LazyImage = React.forwardRef<HTMLImageElement, LazyImageProps>(
  (
    {
      className,
      containerClassName,
      skeletonClassName,
      onLoad,
      onError,
      ...props
    },
    ref,
  ) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
      setIsLoaded(false);
    }, [props.src, props.srcSet]);

    const handleLoad = React.useCallback(
      (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsLoaded(true);
        onLoad?.(event);
      },
      [onLoad],
    );

    const handleError = React.useCallback(
      (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsLoaded(true);
        onError?.(event);
      },
      [onError],
    );

    return (
      <div className={cn("relative overflow-hidden bg-muted", containerClassName)}>
        <img
          ref={ref}
          {...props}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "h-full w-full object-cover opacity-0 transition-opacity duration-500",
            isLoaded && "opacity-100",
            className,
          )}
        />
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-muted transition-opacity duration-300",
            isLoaded && "opacity-0",
            skeletonClassName,
          )}
        />
      </div>
    );
  },
);

LazyImage.displayName = "LazyImage";

export default LazyImage;
