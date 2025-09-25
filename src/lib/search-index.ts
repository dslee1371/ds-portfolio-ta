import type { CommandKItem } from "@/components/command/CommandK"
import { PROJECTS, PROJECT_TAGS } from "@/data/projects"

function uniqueKeywords(...groups: Array<string | string[] | undefined>): string[] {
  const set = new Set<string>()
  for (const group of groups) {
    if (!group) continue
    if (Array.isArray(group)) {
      group.forEach((value) => {
        const normalized = value.trim()
        if (normalized) {
          set.add(normalized)
        }
      })
    } else {
      const normalized = group.trim()
      if (normalized) {
        set.add(normalized)
      }
    }
  }
  return Array.from(set)
}

function createProjectKeywords(description: string, tags: string[]): string[] {
  const segments = description
    .split(/[·,]/)
    .map((segment) => segment.trim())
    .filter(Boolean)
  const words = segments.flatMap((segment) =>
    segment
      .split(/\s+/)
      .map((part) => part.trim())
      .filter(Boolean)
  )

  return uniqueKeywords(
    "project",
    "프로젝트",
    description,
    segments,
    words,
    tags,
  )
}

const PAGE_ITEMS: CommandKItem[] = [
  {
    label: "Home",
    to: "/",
    keywords: ["home", "start", "hero", "메인", "홈", "메인 화면"],
    description: "랜딩 페이지 및 주요 소개",
  },
  {
    label: "Projects",
    to: "/#projects",
    keywords: ["project", "work", "case study", "프로젝트", "포트폴리오"],
    description: "선정 프로젝트 리스트",
  },
  {
    label: "About",
    to: "/#about",
    keywords: ["about", "profile", "career", "소개", "경력"],
    description: "이력 및 소개 섹션",
  },
  {
    label: "Skills",
    to: "/#skills",
    keywords: ["skill", "stack", "tech", "기술", "스킬", "역량"],
    description: "핵심 기술 스택",
  },
  {
    label: "Contact",
    to: "/#contact",
    keywords: ["contact", "email", "연락", "문의", "상담"],
    description: "연락처 및 상담 요청",
  },
]

const PROJECT_ITEMS: CommandKItem[] = PROJECTS.map((project) => ({
  label: project.title,
  to: "/#projects",
  keywords: uniqueKeywords(project.title, createProjectKeywords(project.desc, project.tags)),
  description: project.desc,
}))

const TAG_ITEMS: CommandKItem[] = PROJECT_TAGS.map((tag) => ({
  label: `Tag · ${tag}`,
  to: "/#projects",
  keywords: uniqueKeywords("tag", "태그", "프로젝트", tag),
  description: `${tag} 관련 프로젝트 태그`,
}))

export const COMMAND_ITEMS: CommandKItem[] = [...PAGE_ITEMS, ...PROJECT_ITEMS, ...TAG_ITEMS]
