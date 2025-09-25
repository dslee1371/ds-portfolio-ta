/* eslint-disable react-refresh/only-export-components */
import React from "react"

type LocationLike = {
  pathname: string
  search: string
  hash: string
}

type NavigateOptions = {
  replace?: boolean
  state?: unknown
}

type RouterContextValue = {
  location: LocationLike
  navigate: (to: string, options?: NavigateOptions) => void
}

const defaultLocation: LocationLike = {
  pathname: "/",
  search: "",
  hash: "",
}

const RouterContext = React.createContext<RouterContextValue | null>(null)

function getWindowLocation(): LocationLike {
  if (typeof window === "undefined") {
    return defaultLocation
  }

  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  }
}

export function BrowserRouter({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = React.useState<LocationLike>(() => getWindowLocation())

  React.useEffect(() => {
    const handlePopState = () => {
      setLocation(getWindowLocation())
    }

    window.addEventListener("popstate", handlePopState)
    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])

  const navigate = React.useCallback((to: string, options?: NavigateOptions) => {
    if (typeof window === "undefined") return

    const nextUrl = to.startsWith("http") ? to : to || "/"
    if (options?.replace) {
      window.history.replaceState(options.state ?? null, "", nextUrl)
    } else {
      window.history.pushState(options?.state ?? null, "", nextUrl)
    }

    setLocation(getWindowLocation())
  }, [])

  const value = React.useMemo<RouterContextValue>(() => ({ location, navigate }), [location, navigate])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useNavigate() {
  const context = React.useContext(RouterContext)
  if (!context) {
    throw new Error("useNavigate must be used within a BrowserRouter")
  }

  return context.navigate
}

export function useLocation() {
  const context = React.useContext(RouterContext)
  if (!context) {
    throw new Error("useLocation must be used within a BrowserRouter")
  }

  return context.location
}

export type { NavigateOptions }
