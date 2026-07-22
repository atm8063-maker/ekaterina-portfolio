'use client'

import { useState } from 'react'
import { projects, type Project } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading, SectionLabel } from '@/components/sections/section-heading'
import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'

function StackTags({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((s) => (
        <span
          key={s}
          className="rounded-md px-2.5 py-1 font-mono text-xs text-[color:var(--text-secondary)]"
          style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
          {s}
        </span>
      ))}
    </div>
  )
}

function ProjectCard({ project, labels }: { project: Project; labels: { before: string; after: string; result: string } }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="group flex h-full min-h-[180px] flex-col rounded-2xl border p-7 transition-colors duration-200"
      style={{
        borderColor: open ? 'var(--border-accent)' : 'var(--border)',
        backgroundColor: open ? 'var(--bg-card-hover)' : 'var(--bg-card)',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full flex-1 flex-col text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-[color:var(--text-muted)]">
            {project.tag}
          </span>
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center font-mono text-lg leading-none group-hover:animate-blink"
            style={{ color: 'var(--accent)' }}
            aria-hidden="true"
          >
            ▮
          </span>
        </div>
        <h3 className="mt-4 font-serif text-xl leading-snug text-[color:var(--text-primary)]">
          {project.title}
        </h3>
        {!open && (
          <p className="mt-2 text-sm text-[color:var(--text-secondary)]">
            {project.description}
          </p>
        )}
      </button>

      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4 pt-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-[color:var(--text-muted)]">
                {labels.before}
              </p>
              <p className="mt-1 text-sm text-[color:var(--text-muted)]">
                {project.before}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-[color:var(--text-muted)]">
                {labels.after}
              </p>
              <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                {project.after}
              </p>
            </div>
            <div
              className="rounded-lg p-3"
              style={{ backgroundColor: 'var(--accent-dim)' }}
            >
              <p className="font-mono text-xs uppercase tracking-wide text-[color:var(--accent)]">
                {labels.result}
              </p>
              <p className="mt-1 text-sm text-[color:var(--text-primary)]">
                {project.result}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-1">
        <StackTags stack={project.stack} />
      </div>
    </div>
  )
}

export function Projects() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const localizedProjects = projects[lang]

  return (
    <section id="projects" className="px-6 py-[72px] md:py-[120px]">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <SectionLabel>{t.projects.label}</SectionLabel>
          <SectionHeading>{t.projects.heading}</SectionHeading>
          <p className="mt-4 max-w-[640px] text-[color:var(--text-secondary)]">
            {t.projects.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {localizedProjects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 80} className="h-full">
              <ProjectCard
                project={project}
                labels={{
                  before: t.projects.beforeLabel,
                  after: t.projects.afterLabel,
                  result: t.projects.resultLabel,
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
