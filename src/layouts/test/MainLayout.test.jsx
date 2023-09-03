import { describe, test, beforeEach, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MainLayout } from "../MainLayout";

describe("Main Layout", () => {
  beforeEach(() => {
    render(
      <MainLayout findByAltText="layout">
        <h1>Children component</h1>
      </MainLayout>
    );
  });

  test("Must render children components", () => {
    expect(screen.getByText(/children component/i)).toBeDefined();
  });
});
