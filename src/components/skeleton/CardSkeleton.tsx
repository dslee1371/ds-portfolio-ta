import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardSkeletonProps {
  className?: string;
}

export default function CardSkeleton({ className }: CardSkeletonProps) {
  return (
    <Card
      aria-hidden
      className={cn(
        "h-full overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-background/90 via-muted/20 to-background/95",
        className,
      )}
    >
      <CardContent className="flex h-full flex-col justify-between gap-6 p-6">
        <div className="space-y-5">
          <div className="skeleton aspect-video w-full rounded-xl" aria-hidden />
          <div className="space-y-3">
            <div className="skeleton h-4 w-3/4" aria-hidden />
            <div className="skeleton h-4 w-1/2" aria-hidden />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="skeleton h-9 w-24 rounded-full" aria-hidden />
        </div>
      </CardContent>
    </Card>
  );
}
