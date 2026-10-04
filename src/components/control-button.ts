/**
 * Shared chrome metrics for the top bar, matched to the header used on Fyka
 * Notes, Retro and Votes so the sites read as one family: 44px square on
 * mobile, 52px from md up.
 *
 * Applied on top of shadcn's Button, so this string has to override its
 * size and border; `cn` (tailwind-merge) resolves those conflicts.
 */
export const controlButtonClass =
  "flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border-2 border-border bg-background/80 text-foreground shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-background/80 hover:shadow-xl motion-reduce:transition-none md:h-13 md:w-13 md:rounded-xl dark:bg-card/80 dark:hover:bg-card/80";
