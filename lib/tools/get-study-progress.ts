import { z } from "zod";

export const getStudyProgressTool = {
  description:
    "Gets structured study progress information for a subject in StudyFlow.",

  inputSchema: z.object({
    subject: z
      .string()
      .describe("The study subject the user wants progress information for."),
  }),

  execute: async ({ subject }: { subject: string }) => {
    // Server-side study data for the Generative UI assignment.
    const studyData = {
      completed: 18,
      total: 25,
    };

    const percentage = Math.round(
      (studyData.completed / studyData.total) * 100,
    );

    let status = "Needs improvement";

    if (percentage >= 80) {
      status = "Excellent progress";
    } else if (percentage >= 60) {
      status = "Good progress";
    }

    return {
      subject,
      completed: studyData.completed,
      total: studyData.total,
      percentage,
      status,
    };
  },
};