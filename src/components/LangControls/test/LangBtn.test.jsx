import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { LangBtn } from "../LangBtn";
import { LangProvider, globals } from "../../../LangProvider";
import { useTranslation } from "react-i18next";

describe("LangBtn component", () => {
  beforeEach(() => {
    const TestApp = () => {
      const [t, i18n] = useTranslation("global");
      return (
        <>
          <LangProvider>
            <LangBtn lang="es" dFlag={false} />
            <LangBtn lang="en" dFlag={false} />
            <p>{t("test")}</p>
          </LangProvider>
        </>
      );
    };

    render(<TestApp />);
  });

  test("must change language", () => {
    const esBtn = screen.getByText("es");

    fireEvent.click(esBtn);
    expect(screen.getByText(globals.global_es.test)).toBeDefined();
  });
});
