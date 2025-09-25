import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  "Kubernetes",
  "Helm",
  "Kustomize",
  "Argo CD",
  "Jenkins",
  "GitHub Actions",
  "Terraform",
  "Ansible",
  "Docker",
  "Nginx",
  "Prometheus/Grafana",
  "AWS",
  "GCP",
  "MySQL",
  "Python",
  "Streamlit",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">기술 스택</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {SKILLS.map((skill) => (
          <motion.div
            key={skill}
            className="group flex items-center justify-between overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/10 via-sky-500/10 to-purple-500/10 px-4 py-3 text-sm shadow-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <span className="font-medium">{skill}</span>
            <span className="relative h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-sky-500 to-purple-500 blur-[2px]" />
              <span className="absolute inset-[2px] rounded-full bg-background" />
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
