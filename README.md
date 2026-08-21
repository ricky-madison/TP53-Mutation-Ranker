Inspiration Point — TP53 Mutation Druggability Dashboard

React + TypeScript + Vite application for visualizing and prioritizing TP53 cancer mutations based on therapeutic potential.

Overview

This tool processes multi-modal data from structural biology, quantum chemistry, and clinical databases to rank TP53 mutations by druggability. It helps researchers identify the most promising targets for small-molecule therapy development.

Key Features
Mutation ranking by therapeutic score (structural + functional + clinical metrics)
Search & filter across 150+ TP53 mutations
Drug hypothesis mapping — top mutations linked to clinical-stage compounds
Quantum computing integration — fidelity scores from IBM quantum backends
ML model comparison — classical vs quantum-enhanced prediction performance
Data Sources
therapeutic_scores_corrected.csv — multi-parameter druggability scoring
quantum_docking_results — IBM quantum backend (ibm_fez) energy calculations
full_dataset — COSMIC frequencies, pathogenicity, pLDDT confidence scores
Tech Stack
React 18 with HMR
TypeScript for type safety
Vite as build tool
Tailwind CSS for styling
ESLint with type-aware lint rules
(Optional) shadcn/ui via components.json
Getting Started
# Clone the repository
git clone <repo-url>
cd inspiration-point

# Install dependencies (choose one)
npm install
# or
bun install

# Start the development server
npm run dev
# or
bun run dev


The app will be available at http://localhost:5173.

Project Structure
src/
├── data/
│   └── tp53-mutations.ts    # Mutation database + helper functions
├── components/              # UI components
├── hooks/                   # Custom React hooks
├── utils/                   # Utility functions
└── App.tsx                  # Main application entry

Data API

The mutation data interface provides:

interface MutationData {
  mutation: string;            // e.g., "TP53_Y220C"
  shortName: string;           // e.g., "Y220C"
  rmsd: number;                // Root mean square deviation
  affinity: number;            // Binding affinity (kcal/mol)
  functionalScore: number;     // Functional impact score (0-1)
  structuralScore: number;     // Structural stability score (0-1)
  affinityScore: number;       // Binding affinity score (0-1)
  clinicalAnchor: number;      // Clinical evidence anchor (0-1)
  therapeuticScore: number;    // Primary ranking metric (0-1)
  rank: number;                // Overall rank among all mutations
  cosmicCount: number;         // Frequency in COSMIC database
  cosmicPercent: number;       // Percentage in COSMIC database
  meanPlddt: number;           // Mean pLDDT confidence score
  minPlddt: number;            // Minimum pLDDT confidence score
  maxPlddt: number;            // Maximum pLDDT confidence score
  hasDbd: boolean;             // Affects DNA-binding domain
  hasTetramerization: boolean; // Affects tetramerization domain
  pathogenicity: number;       // Disease-causing likelihood (0-1)
  rnaRiskFlag: boolean;        // RNA splicing risk indicator
  quantumEnergy?: number;      // Quantum fidelity score
  fidelity?: number;           // Quantum fidelity metric
  conformationalDiversity?: number; // Structural diversity metric
}

Helper Functions
searchMutations(query: string) — filter by mutation or shortName
getDrugHypothesis(shortName: string) — retrieve clinical-stage drug candidate
getDruggabilityClass(score: number) — High/Medium/Low classification
getPathogenicityLabel(score: number) — Interpret pathogenicity scores
formatMutation(name: string) — Format mutation name consistently
Current Top Druggable Mutations
Mutation	Drug Candidate	Therapeutic Score
Y220C	Rezatapopt (PC14586) — Phase II	0.702
R248Q	APR-246 (Eprenetapopt) — Phase III	0.602
R282W	ALRN-6924 — Phase II	0.588
R273H	COTI-2 — Phase I/II	0.528
R248W	APR-246 combination — Synergistic with 5-azacitidine	0.528
R175H	PC14586 analogue — Structural stabilization	0.480
R273C	PC14586 analogue — Structural stabilization	0.490
R249S	PC14586 analogue — Structural stabilization	0.518
V157F	PC14586 analogue — Structural stabilization	0.521
R158L	PC14586 analogue — Structural stabilization	0.486
Expanding the Application
Adding New Data

Add mutations to the allMutations array in tp53-mutations.ts following the MutationData interface.

Customizing the UI

The project uses Tailwind CSS. Update tailwind.config.js for theme customization.

Enabling Stricter Linting

For production, replace the default ESLint config with type-aware rules (see eslint.config.js comments).

Building for Production
npm run build
# or
bun run build


The build output will be in the dist/ directory.

License

Private repository — all rights reserved.

Contributors

@ricky-madison

Built for cancer research prioritization. Data represents processed results from therapeutic scoring pipelines and quantum docking simulations.
