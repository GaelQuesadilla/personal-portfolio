import React from "react";
import { useTranslation } from "react-i18next";
import { LANGS } from "../../constants/LANGS.js";
import { Button } from "react-bootstrap";

export const LangBtn = ({
  lang,
  displayValue,
  dFlag = true,
  className,
  ...props
}) => {
  const [t, i18n] = useTranslation("global");
  const FLAG = LANGS[lang].Flag;

  return (
    <Button
      onClick={() => i18n.changeLanguage(lang)}
      className={"mx-1 " + className}
      {...props}
    >
      {dFlag ? (
        <span>
          <FLAG />
        </span>
      ) : null}
      <span>{displayValue || lang}</span>
    </Button>
  );
};
