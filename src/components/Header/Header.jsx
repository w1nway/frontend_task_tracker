import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    background: #c4a6fc;
    padding: 0.5rem 1rem;
    `;

const StyledFooter = styled.footer`
    background: #c4a6fc;
    padding: 0.5rem 1rem;
    `;


const Header = () => {
    return <StyledHeader>Task Tracker </StyledHeader>;
};

const Footer = () => {
    return <StyledFooter>Salam Aleykum </StyledFooter>
}

export default Header;
