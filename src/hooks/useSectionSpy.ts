import * as React from "react";

type UseSectionSpyOptions = {
  /**
   * IntersectionObserver rootMargin. Defaults to "-45% 0px -45% 0px" to trigger near viewport center.
   */
  rootMargin?: string;
  /**
   * IntersectionObserver thresholds. Defaults to [0, 0.1, 0.25, 0.5, 0.75, 1].
   */
  thresholds?: number[];
};

/**
 * Observe the provided section IDs and return the section currently in view.
 */
export function useSectionSpy(
  sectionIds: string[],
  { rootMargin = "-45% 0px -45% 0px", thresholds = [0, 0.1, 0.25, 0.5, 0.75, 1] }: UseSectionSpyOptions = {}
) {
  const [activeId, setActiveId] = React.useState(() => sectionIds[0] ?? "");
  const visibleSectionsRef = React.useRef(new Set<string>());

  React.useEffect(() => {
    setActiveId((current) => {
      if (!sectionIds.length) {
        return "";
      }

      return sectionIds.includes(current) ? current : sectionIds[0];
    });
  }, [sectionIds]);

  React.useEffect(() => {
    if (!sectionIds.length) {
      setActiveId("");
      return;
    }

    const visibleSections = visibleSectionsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        let shouldUpdate = false;

        entries.forEach((entry) => {
          const { id } = entry.target;

          if (entry.isIntersecting) {
            if (!visibleSections.has(id)) {
              visibleSections.add(id);
              shouldUpdate = true;
            }
          } else if (visibleSections.has(id)) {
            visibleSections.delete(id);
            shouldUpdate = true;
          }
        });

        if (shouldUpdate) {
          const orderedVisible = sectionIds.find((id) => visibleSections.has(id));

          if (orderedVisible) {
            setActiveId(orderedVisible);
            return;
          }

          // No section is intersecting. Fallback to the nearest section to the top of the viewport.
          const nearest = sectionIds
            .map((id) => {
              const element = document.getElementById(id);
              if (!element) {
                return { id, distance: Number.POSITIVE_INFINITY };
              }
              const rect = element.getBoundingClientRect();
              return { id, distance: Math.abs(rect.top) };
            })
            .reduce((closest, current) =>
              current.distance < closest.distance ? current : closest
            );

          if (nearest.distance !== Number.POSITIVE_INFINITY) {
            setActiveId(nearest.id);
          }
        }
      },
      {
        root: null,
        rootMargin,
        threshold: thresholds,
      }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    elements.forEach((element) => observer.observe(element));

    return () => {
      visibleSections.clear();
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [rootMargin, sectionIds, thresholds]);

  return activeId;
}

export default useSectionSpy;
