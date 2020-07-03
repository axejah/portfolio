import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import config from "../../../customize"
import RSS from "../../../_assets/icons/rss.svg"
import { setThemeVars } from "../../util/theme-helper"

const Footer = () => {
  return (
    <StyledFooter className="main-footer">
      <div />
      <div>
        <span>© {new Date().getFullYear()} </span>
        <StyledA
          href={config.footerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {config.author}
        </StyledA>
      </div>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  margin-top: 1rem;
  padding: 1rem;

  @media (max-width: 500px) {
    font-size: 0.77rem;
  }
`
const StyledA = styled.a``
