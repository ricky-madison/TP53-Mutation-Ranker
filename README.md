# TP53-Mutation-Ranker — TP53 Mutation Druggability Dashboard

This application provides a **React + TypeScript + Vite** dashboard for visualizing and prioritizing TP53 cancer mutations based on their therapeutic potential. The dashboard processes multi-modal data from structural biology, quantum chemistry, and clinical databases to rank TP53 mutations by druggability and help researchers identify promising targets for small-molecule therapy development.

## Key Features

*   **Mutation ranking** — Rank mutations using structural, functional, and clinical metrics
*   **Search and filtering** — Search across 150+ TP53 mutations
*   **Drug hypothesis mapping** — Connect high-priority mutations with clinical-stage drug candidates
*   **Quantum computing integration** — Display quantum fidelity and docking-related metrics from IBM quantum backends
*   **ML model comparison** — Compare classical and quantum-enhanced prediction performance

## Tech Stack

*   **Framework:** React 18
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Components:** shadcn/ui

## Getting Started

### 1. Install Dependencies
```bash
npm install
# OR
bun install
```

### 2. Start Development
```bash
npm run dev
# OR
bun run dev
```

## Project Structure

```text
src/
├── data/        # TP53 mutation datasets (tp53-mutations.ts)
├── components/  # UI components
├── hooks/       # Custom React hooks
├── utils/       # Helper functions
└── App.tsx      # Main application entry
```

## Mutation Data API

Data objects follow the `MutationData` interface:

```typescript
interface MutationData {
  mutation: string;
  shortName: string;
  rmsd: number;
  affinity: number;
  therapeuticScore: number;
  rank: number;
  cosmicCount: number;
  pathogenicity: number;
  quantumEnergy?: number;
  fidelity?: number;
}
```

## Top Druggable Mutations

| Mutation | Drug Candidate | Score |
| :--- | :--- | :--- |
| **Y220C** | Rezatapopt (PC14586) — Phase II | 0.702 |
| **R248Q** | APR-246 (Eprenetapopt) — Phase III | 0.602 |
| **R282W** | ALRN-6924 — Phase II | 0.588 |
| **R273H** | COTI-2 — Phase I/II | 0.528 |

## License

Private repository — all rights reserved.

---
*Developed by @ricky-madison for cancer research prioritization.*
