// libs
import React, { useEffect, useState } from "react";
import classNames from "classnames";
// contexts
import { useLocale } from "@/contexts/LocalContext";
// others
import "./styles.scss";
import { keyCode, Time } from "@/constants";

const LocaleButton = () => {
  const { localeDataSource, setLocale, locale } = useLocale();
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === keyCode.LOCALE) {
        e.preventDefault();

        setActive(true);
        if (locale === "vi") {
          setLocale("en");
        } else {
          setLocale("vi");
        }

        setTimeout(() => {
          setActive(false);
        }, Time.TIME_SHOW_HIDE);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [locale]);

  return (
    <div className={classNames("button-wrapper", { active: isActive })}>
      <div className="button-wrapper-inner">
        <div className="button-name">F12</div>
        <div className="button-icon">
          {locale === "vi"
            ? localeDataSource["Controls.Vietnamese"]
            : localeDataSource["Controls.English"]}
        </div>
      </div>
    </div>
  );
};

export default LocaleButton;
