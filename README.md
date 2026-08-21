# Inspiration Point — TP53 Mutation Druggability Dashboard

This application provides a React + TypeScript + Vite dashboard for visualizing and prioritizing TP53 cancer mutations based on their therapeutic potential.

The dashboard processes multi-modal data from structural biology, quantum chemistry, and clinical databases to rank TP53 mutations by druggability and help researchers identify promising targets for small-molecule therapy development.

## Key Features

- **Mutation ranking** — Rank mutations using structural, functional, and clinical metrics
- **Search and filtering** — Search across 150+ TP53 mutations
- **Drug hypothesis mapping** — Connect high-priority mutations with clinical-stage drug candidates
- **Quantum computing integration** — Display quantum fidelity and docking-related metrics from IBM quantum backends
- **ML model comparison** — Compare classical and quantum-enhanced prediction performance

## Data Sources

The application uses several processed datasets:

- `therapeutic_scores_corrected.csv` — Multi-parameter druggability scoring
- `quantum_docking_results` — Quantum docking and energy calculations from the IBM `ibm_fez` backend
- `full_dataset` — COSMIC frequencies, pathogenicity, pLDDT confidence scores, and related mutation information

## Tech Stack

- **React 18** — UI framework with HMR
- **TypeScript** — Type safety
- **Vite** — Development server and build tool
- **Tailwind CSS** — Styling
- **ESLint** — Linting and code quality
- **shadcn/ui** — Optional UI component system through `components.json`

## Getting Started

### Clone the Repository

```bash
git clone <repo-url>
cd inspiration-point

Install Dependencies

Using npm:

npm install


Or using Bun:

bun install

Start the Development Server

Using npm:

npm run dev


Or using Bun:

bun run dev


The application will be available at:

http://localhost:5173

Project Structure
src/
├── data/
│   └── tp53-mutations.ts
├── components/
├── hooks/
├── utils/
└── App.tsx

Mutation Data API

The mutation database uses the following TypeScript interface:

interface MutationData {
  mutation: string;
  shortName: string;
  rmsd: number;
  affinity: number;
  functionalScore: number;
  structuralScore: number;
  affinityScore: number;
  clinicalAnchor: number;
  therapeuticScore: number;
  rank: number;
  cosmicCount: number;
  cosmicPercent: number;
  meanPlddt: number;
  minPlddt: number;
  maxPlddt: number;
  hasDbd: boolean;
  hasTetramerization: boolean;
  pathogenicity: number;
  rnaRiskFlag: boolean;
  quantumEnergy?: number;
  fidelity?: number;
  conformationalDiversity?: number;
}

Helper Functions
searchMutations(query: string) — Filter mutations by mutation name or short name
getDrugHypothesis(shortName: string) — Retrieve the associated clinical-stage drug candidate
getDruggabilityClass(score: number) — Classify a mutation as High, Medium, or Low druggability
getPathogenicityLabel(score: number) — Convert pathogenicity scores into interpretable labels
formatMutation(name: string) — Format mutation names consistently throughout the application
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
Adding New Mutation Data

Add mutations to the allMutations array in:

src/data/tp53-mutations.ts


Each mutation should follow the MutationData interface.

Customizing the UI

The project uses Tailwind CSS.

Update:

tailwind.config.js


to customize the application's theme and styling.

Expanding the ESLint Configuration

For production applications, consider enabling type-aware ESLint rules:

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Recommended type-aware rules
      tseslint.configs.recommendedTypeChecked,

      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,

      // Optionally, add stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])


You can also install React-specific ESLint plugins:

npm install -D eslint-plugin-react-x eslint-plugin-react-dom


Then configure them in eslint.config.js:

import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Enable React lint rules
      reactX.configs['recommended-typescript'],

      // Enable React DOM lint rules
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

Building for Production

Using npm:

npm run build


Or using Bun:

bun run build


The production build will be generated in:

dist/

Previewing the Production Build

Using npm:

npm run preview


Or using Bun:

bun run preview

Development Commands
Command	Description
npm install	Install project dependencies
npm run dev	Start the development server
npm run build	Create a production build
npm run preview	Preview the production build
npm run lint	Run ESLint

Equivalent Bun commands:

bun install
bun run dev
bun run build
bun run preview
bun run lint

License

Private repository — all rights reserved.

Contributors

@ricky-madison

Built for cancer research prioritization. Data represents processed results from therapeutic scoring pipelines and quantum docking simulations.
