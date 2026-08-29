
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
    page.getByText("45 minutes"),
  ).toBeVisible();

  // Start the study session
  await page.getByRole("link", { name: "Start Session" }).click();

  // Verify the study page
  await expect(
    page.getByRole("heading", { name: "Java Arrays" }),
  ).toBeVisible();

  await expect(
    page.getByText("Focus on your task. You've got this!"),
  ).toBeVisible();

  // Verify the initial timer
  await expect(page.getByText("45:00")).toBeVisible();

  // Interact with the timer
  await page.getByRole("button", { name: "Test Timer" }).click();

  // Verify that the timer decreased
  await expect(page.getByText("44:00")).toBeVisible();

  // Verify the AI study assistant
  await expect(
    page.getByRole("heading", { name: "Study Flow AI" }),
  ).toBeVisible();
});

