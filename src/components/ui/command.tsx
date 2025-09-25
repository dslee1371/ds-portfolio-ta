import React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"

type CommandDialogProps = {
  open: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

export function CommandDialog({ open, onOpenChange, children }: CommandDialogProps) {
  React.useEffect(() => {
    if (!open || typeof document === "undefined") return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange?.(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    const { body } = document
    const previousOverflow = body.style.overflow
    body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      body.style.overflow = previousOverflow
    }
  }, [open, onOpenChange])

  if (!open) return null

  return createPortal(
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-start justify-center bg-background/80 backdrop-blur-sm px-4 py-24"
      onClick={() => onOpenChange?.(false)}
    >
      <div
        className="relative w-full max-w-xl"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

type CommandProps = React.HTMLAttributes<HTMLDivElement>

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(function Command(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-2xl",
        className
      )}
      {...props}
    />
  )
})

type CommandInputProps = React.InputHTMLAttributes<HTMLInputElement>

export const CommandInput = React.forwardRef<HTMLInputElement, CommandInputProps>(function CommandInput(
  { className, ...props },
  ref
) {
  return (
    <div className="flex items-center border-b border-border bg-muted/40 px-3">
      <input
        ref={ref}
        className={cn(
          "h-11 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none",
          className
        )}
        {...props}
      />
    </div>
  )
})

type CommandListProps = React.HTMLAttributes<HTMLDivElement>

export const CommandList = React.forwardRef<HTMLDivElement, CommandListProps>(function CommandList(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      role="listbox"
      className={cn("max-h-72 overflow-y-auto py-2", className)}
      {...props}
    />
  )
})

type CommandEmptyProps = React.HTMLAttributes<HTMLDivElement>

export const CommandEmpty = React.forwardRef<HTMLDivElement, CommandEmptyProps>(function CommandEmpty(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("px-4 py-6 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})

type CommandGroupProps = React.HTMLAttributes<HTMLDivElement>

export const CommandGroup = React.forwardRef<HTMLDivElement, CommandGroupProps>(function CommandGroup(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("px-2 py-1.5 text-sm", className)}
      {...props}
    />
  )
})

type CommandItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean
}

export const CommandItem = React.forwardRef<HTMLButtonElement, CommandItemProps>(function CommandItem(
  { className, active, children, onClick, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      role="option"
      className={cn(
        "group flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors",
        active ? "bg-primary/15 text-primary" : "text-foreground hover:bg-muted",
        className
      )}
      data-active={active ? "true" : undefined}
      aria-selected={active}
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
})

type CommandSeparatorProps = React.HTMLAttributes<HTMLDivElement>

export const CommandSeparator = React.forwardRef<HTMLDivElement, CommandSeparatorProps>(function CommandSeparator(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      role="separator"
      className={cn("mx-2 my-1 h-px bg-border", className)}
      {...props}
    />
  )
})

type CommandShortcutProps = React.HTMLAttributes<HTMLSpanElement>

export const CommandShortcut = React.forwardRef<HTMLSpanElement, CommandShortcutProps>(function CommandShortcut(
  { className, ...props },
  ref
) {
  return (
    <span
      ref={ref}
      className={cn("ml-auto text-xs text-muted-foreground", className)}
      {...props}
    />
  )
})
