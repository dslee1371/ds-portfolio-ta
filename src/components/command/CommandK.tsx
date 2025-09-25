import React from "react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { useLocation, useNavigate } from "react-router-dom"
import { ArrowUpRight, Home, Info, Mail, PanelsTopLeft } from "lucide-react"

type CommandKItem = {
  label: string
  path: string
  keywords?: string[]
  description?: string
}

type CommandKProps = {
  items: CommandKItem[]
}

function getSearchableText(item: CommandKItem) {
  const base = [item.label, item.path, ...(item.keywords ?? [])]
    .join(" ")
    .toLowerCase()
  return base
}

const iconMap: Record<string, React.ReactNode> = {
  home: <Home className="h-4 w-4" />,
  projects: <PanelsTopLeft className="h-4 w-4" />,
  about: <Info className="h-4 w-4" />,
  contact: <Mail className="h-4 w-4" />,
}

function getIconForLabel(label: string) {
  const key = label.trim().toLowerCase()
  return iconMap[key] ?? <ArrowUpRight className="h-4 w-4" />
}

export default function CommandK({ items }: CommandKProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [activeIndex, setActiveIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [isMac, setIsMac] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    setIsMac(/Mac|iPhone|iPad|iPod/.test(window.navigator.platform))
  }, [])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  React.useEffect(() => {
    if (!open) return
    const timer = window.setTimeout(() => {
      inputRef.current?.focus()
    }, 10)

    return () => window.clearTimeout(timer)
  }, [open])

  React.useEffect(() => {
    if (!open) return
    setActiveIndex(0)
  }, [open, search])

  const filteredItems = React.useMemo(() => {
    const trimmed = search.trim().toLowerCase()
    if (!trimmed) return items

    return items.filter((item) => getSearchableText(item).includes(trimmed))
  }, [items, search])

  React.useEffect(() => {
    if (activeIndex >= filteredItems.length) {
      setActiveIndex(filteredItems.length === 0 ? 0 : filteredItems.length - 1)
    }
  }, [filteredItems, activeIndex])

  const handleSelect = React.useCallback(
    (item: CommandKItem) => {
      const target = item.path || "/"
      const currentFullPath = `${location.pathname}${location.hash}`
      const shouldReplace = currentFullPath === target
      setOpen(false)
      navigate(target, { replace: shouldReplace })

      if (typeof window === "undefined") return

      const hashIndex = target.indexOf("#")
      if (hashIndex >= 0) {
        const elementId = target.slice(hashIndex + 1)
        if (elementId) {
          window.requestAnimationFrame(() => {
            document
              .getElementById(elementId)
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          })
        }
      } else {
        window.requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        })
      }
    },
    [location.hash, location.pathname, navigate]
  )

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (filteredItems.length === 0) return

    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActiveIndex((prev) => Math.min(prev + 1, filteredItems.length - 1))
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      setActiveIndex((prev) => Math.max(prev - 1, 0))
    } else if (event.key === "Enter") {
      event.preventDefault()
      const item = filteredItems[activeIndex]
      if (item) {
        handleSelect(item)
      }
    }
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command onKeyDown={handleKeyDown} className="bg-card/95">
        <div className="flex items-center justify-between px-3 pt-3 text-xs text-muted-foreground">
          <span>찾고 싶은 섹션이나 키워드를 입력하세요</span>
          <span className="font-mono text-[11px] text-muted-foreground/80">{isMac ? "⌘" : "Ctrl"}+K</span>
        </div>
        <CommandInput
          ref={inputRef}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search pages, sections, or keywords..."
          aria-label="Command palette search"
        />
        <CommandList>
          {filteredItems.length === 0 ? (
            <CommandEmpty>일치하는 결과가 없습니다.</CommandEmpty>
          ) : (
            <CommandGroup>
              {filteredItems.map((item, index) => (
                <CommandItem
                  key={item.label}
                  active={index === activeIndex}
                  onClick={() => handleSelect(item)}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground">
                    {getIconForLabel(item.label)}
                  </span>
                  <span className="flex flex-1 flex-col">
                    <span className="text-sm font-medium">{item.label}</span>
                    {item.keywords && item.keywords.length > 0 ? (
                      <span className="text-[11px] text-muted-foreground/80">
                        {item.keywords.join(" · ")}
                      </span>
                    ) : null}
                  </span>
                  <CommandShortcut>{item.path.replace("/#", "#")}</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  )
}

export type { CommandKItem }
