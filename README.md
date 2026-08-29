# StudyFlow

StudyFlow is a study planning app designed to help students stay consistent with their study schedules.

## Features

- Create study sessions
- Plan daily timetable
- Study session timer
- Learning reflection after each session
- Progress tracking
- AI-powered study assistant
- Server-side AI tool for study progress
- Structured tool results rendered as UI components
- Responsive design
- Health check page

## AI Study Assistant

StudyFlow includes an AI study assistant powered by Google Gemini.

The assistant can answer study questions and use a server-side tool when a student asks about their study progress.

### Tool Contract: `getStudyProgress`

**Purpose:**  
Retrieve structured study progress information for a requested subject.

**Input schema:**

```ts
{
  subject: string;
}
```

**Example input:**

```json
{
  "subject": "Mathematics"
}
```

**Return shape:**

```ts
{
  subject: string;
  completed: number;
  total: number;
  percentage: number;
  status: string;
}
```

**Example output:**

```json
{
  "subject": "Mathematics",
  "completed": 18,
  "total": 25,
  "percentage": 72,
  "status": "Good progress"
}
```

### Tool Lifecycle UI

The StudyFlow chat renders different UI states for the tool lifecycle:

1. **Input streaming**  
   Shows that the study progress request is being prepared.

2. **Input available**  
   Shows that StudyFlow is analyzing the requested progress.

3. **Output available**  
   Renders the structured result as a `StudyProgressCard` component instead of displaying raw JSON.

4. **Output error**  
   Displays a dedicated error message if the tool fails.

This demonstrates how a generative UI can turn structured AI tool results into application components.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- AI SDK
- Google Gemini
- Zod
- Vercel

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## AI Configuration

The Google Gemini API key is stored in an environment variable:

```text
GOOGLE_GENERATIVE_AI_API_KEY
```

The API key is kept server-side and is not exposed to the browser.

## Assignment Demonstration

The AI tool can be demonstrated by asking:

> Show me my study progress for Mathematics.

The AI invokes `getStudyProgress`, receives structured data, and renders the result using the Study Progress Card UI.


## 3D Focus Experience

StudyFlow includes an interactive 3D focus experience built with React Three Fiber and Three.js.

### Interactions
- Orbit and zoom the 3D object using mouse or touch.
- Switch between Focus, Deep Work, and Break modes to change the object's material.
- Start and pause the focus animation.
- Reduced-motion preferences disable the continuous 3D animation.

### Performance
The 3D scene uses lightweight procedural geometry instead of a large external model. The canvas is dynamically loaded on the 3D page, uses a limited device pixel ratio, and disables antialiasing to reduce GPU load on mobile devices.

A static loading fallback is provided so the page remains useful while the 3D experience loads.

### What I'd Add With More Time
I would add a compressed GLB study-desk scene, richer lighting/environment effects, and connect the 3D experience directly to the user's StudyFlow timer and study-session progress.