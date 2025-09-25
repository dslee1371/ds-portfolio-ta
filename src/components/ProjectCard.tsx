import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LazyImage from "@/components/media/LazyImage";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href?: string;
  index?: number;
  className?: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  href,
  index = 0,
  className,
}: ProjectCardProps) {
  const MotionWrapper = href ? motion.a : motion.article;
  const isExternalLink = href ? /^https?:/i.test(href) : false;

  return (
    <MotionWrapper
      {...(href
        ? {
            href,
            ...(isExternalLink ? { target: "_blank", rel: "noreferrer" } : {}),
            "aria-label": `${title} 프로젝트 상세 보기`,
          }
        : {})}
      role={href ? undefined : "group"}
      className={cn(
        "group relative block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.2,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.18, ease: "easeOut" },
      }}
      whileFocus={{
        scale: 1.02,
        transition: { duration: 0.18, ease: "easeOut" },
      }}
    >
      <Card className="relative h-full overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-background/90 via-primary/5 to-background/95 shadow-lg transition-shadow group-hover:shadow-2xl group-focus-visible:shadow-2xl">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-sky-500/15 to-purple-500/20" />
        </div>
        <LazyImage
          src={image}
          alt={`${title} 프로젝트 썸네일 이미지`}
          containerClassName="relative z-10 aspect-video w-full bg-gradient-to-br from-background via-muted/40 to-background"
          className="object-contain p-4"
          skeletonClassName="bg-muted/60"
        />
        <CardHeader className="relative z-20 space-y-2 px-6 pt-6 pb-3">
          <CardTitle className="text-lg transition-colors group-hover:text-primary group-focus-visible:text-primary">{title}</CardTitle>
          <CardDescription className="leading-relaxed">{description}</CardDescription>
        </CardHeader>
        <CardContent className="relative z-20 space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-xl border border-primary/10 bg-primary/5 text-foreground">
                {tag}
              </Badge>
            ))}
          </div>
          {href ? (
            <div className="flex justify-end">
              <span className="text-sm font-medium text-primary">상세 보기</span>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </MotionWrapper>
  );
}
