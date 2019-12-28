import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/core";

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props) => (
  <header
    css={css`
      background-color: #dedcee;
      padding: 1rem;
    `}
  >
    <span
      css={css`
        font-size: 1.5rem;
      `}
    >
      {siteTitle}
    </span>
  </header>
);

export default Header;
