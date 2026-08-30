
import { test, expect } from "@playwright/test";

test("user can start a study session and interact with the timer", async ({
  page,
}) => {
  // Open the dashboard
  await page.goto("/dashboard");

  // Verify the current study session
  await expect(
    page.getByRole("heading", { name: "Java Arrays" }),
  ).toBeVisible();

  await expect(
    page.getByText("45 minutes" , { exact: true }),
  ).toBeVisible();

  // Start the study session
  await page.getByRole("link", { name: "Start Session" }).click();

  // Verify the study page
  await expect(
    page.getByRole("heading", { name: "Java Arrays" }),
  ).toBeVisible();

  await expect(
    page.getByText("Stay focused. Your next 45 minutes are yours."),
  ).toBeVisible();

  // Verify the initial timer
  await expect(page.getByText("45:00")).toBeVisible();

  // Start the timer
await page.getByRole("button", { name: "Start Session" }).click();

// Verify that the timer is running
await expect(
  page.getByRole("button", { name: "Pause Session" }),
).toBeVisible();

// Wait for the timer to decrease
await expect(page.getByText("44:59")).toBeVisible({ timeout: 2000 });

 // Verify the AI study assistant
await page.getByRole("link", { name: "AI Help" }).click();

await expect(
  page.getByRole("heading", { name: "Study Flow AI" }),
).toBeVisible();
});

