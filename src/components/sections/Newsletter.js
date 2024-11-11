import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Section } from "../../data/global";
import { Helmet } from "react-helmet";

const Newsletter = () => {
  useEffect(() => {
    const formContainers = document.getElementsByClassName("ml-form-container");
    Array.from(formContainers).forEach((formContainer) => {
      const embeddedDiv = document.createElement("div");
      embeddedDiv.className = "ml-embedded";
      embeddedDiv.setAttribute("data-form", "3M7MKq");
      formContainer.appendChild(embeddedDiv);
    });
  }, []);

  return (
    <Section id="newsletter">
      <Container>
        <div>
          <h2>Our Newsletter</h2>
          <br />
          <StyledParagraph>
            Subscribe to our newsletter to stay updated with the latest news and
            events!
          </StyledParagraph>
          <br />
          <Helmet>
            <script>
              {`
                (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
                .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
                n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
                (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
                ml('account', '1182403');
              `}
            </script>
          </Helmet>
          <div className="ml-form-container"></div>
        </div>
      </Container>
    </Section>
  );
};

export default Newsletter;

const StyledParagraph = styled.p`
  margin-bottom: 1.5rem;
`;
