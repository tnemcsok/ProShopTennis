import React from "react";
import styled from 'styled-components';

const FooterStyle = styled.div`
    width: 100%;
    background-color: ${props => props.theme.green};
    height: 10vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 40px;
`;


class Footer extends React.Component {
  render() {
    return (
        <FooterStyle>
            <div className="footer_wrapper">
                <p>
                © 2020 Copyright
                <span>Brand Name</span> / Design by
                <span>Student Name</span>
                </p>
            </div>
        </FooterStyle>
    )
  }
}

export default Footer;
