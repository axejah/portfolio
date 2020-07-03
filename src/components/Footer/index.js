import React from "react"
import styled from "styled-components"
import config from "../../../customize"

const Footer = () => {
  return (
    <StyledFooter className="main-footer">
      <div />
      <div>
        <span>
          © {new Date().getFullYear()} {config.author}
        </span>
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
