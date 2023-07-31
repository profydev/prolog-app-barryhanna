import styled from "styled-components";
import { Routes } from "@config/routes";
import Link from "next/link";
import { color } from "@styles/theme";
import React from "react";
import { Button } from "../features/ui/button";
import Image from "next/image";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  gap: 2rem;
  a {
    color: ${color("gray", "500")};
    text-decoration: none;
  }
`;

const CTALink = styled.a`
  background-color: ${color("primary", "600")};
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
`;

const SupportModal = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  backdrop-filter: blur(24px);
`;

const SupportModalContent = styled.div`
  background: white;
  width: 400px;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
`;

const SupportModalHeader = styled.h2`
  color: ${color("gray", 900)};
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 2rem;

  button {
    flex: 1;
    font-family: inherit;
  }
`;

const SupportText = styled.p`
  color: ${color("gray", 500)};
  font-size: 14px;
  line-height: 20px;
  width: 60%;
  margin-inline: auto;
`;

const CancelButton = styled(Button)`
  border: 1px solid ${color("gray", 300)};
`;

const ConfirmButton = styled(Button)`
  color: white;
  background: ${color("primary", 600)};
`;

const IssuesPage = () => {
  const [showSupportModal, setShowSupportModal] = React.useState(false);
  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <HeaderNav>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/documentation">Documentation</Link>
          <Link href="/pricing">Pricing</Link>
        </HeaderNav>
        <CTALink href={Routes.projects}>Open Dashboard</CTALink>
      </Header>
      <ContactButton onClick={() => setShowSupportModal(true)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
      {showSupportModal && (
        <SupportModal>
          <SupportModalContent>
            <Image src="/icons/mail.svg" height={48} width={48} alt="" />
            <SupportModalHeader>Contact Us Via Email</SupportModalHeader>
            <SupportText>
              Any questions? Send us an email at prolog@profy.dev. We usually
              answer within 24 hours.
            </SupportText>
            <ButtonContainer>
              <CancelButton
                onClick={() => {
                  setShowSupportModal(false);
                }}
              >
                Cancel
              </CancelButton>
              <ConfirmButton
                onClick={() => {
                  window.location.href = "mailto:support@profy.dev";
                  setShowSupportModal(false);
                }}
              >
                Open Email App
              </ConfirmButton>
            </ButtonContainer>
          </SupportModalContent>
        </SupportModal>
      )}
    </div>
  );
};

export default IssuesPage;
