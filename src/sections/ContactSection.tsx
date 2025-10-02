import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <Card className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/20 via-sky-500/15 to-purple-500/20">
        <div className="pointer-events-none absolute inset-y-0 right-[-10%] hidden h-full w-1/2 rounded-full bg-primary/10 blur-3xl sm:block" />
        <CardHeader>
          <Badge variant="outline" className="w-fit rounded-xl">
            Let's talk
          </Badge>
          <CardTitle className="text-balance">프로젝트 컨설팅 문의</CardTitle>
          <CardDescription className="max-w-[72ch] text-base text-muted-foreground">
            핵심 요구사항을 공유해 주시면 비즈니스 목표와 우선순위에 맞춘 실행 전략을 설계해 드립니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-2xl">
              <a href="mailto:dslee1371@gmail.com">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />이메일 상담
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl">
              <a href="https://github.com/dslee1371" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" aria-hidden="true" />GitHub
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl">
              <a href="https://www.linkedin.com/in/dslee1371/" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />LinkedIn
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
