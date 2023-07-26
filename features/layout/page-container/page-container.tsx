import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { SidebarNavigation } from "../sidebar-navigation";
import { color, displayFont, textFont, space, breakpoint } from "@styles/theme";
import Link from "next/link";
import Image from "next/image";
import packageInfo from "../../../package.json";

type PageContainerProps = {
  children: React.ReactNode;
  title: string;
  info: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${color("gray", 900)};

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const ContentContainer = styled.div`
  min-height: calc(
    100vh - 2 * ${space(8)} - ${({ theme }) => theme.size.headerHeight}
  );
  margin-top: ${({ theme }) => theme.size.headerHeight};
  padding: ${space(8, 3)};
  background: white;
  position: relative;

  @media (min-width: ${breakpoint("desktop")}) {
    min-height: calc(100vh - ${space(3)} - 2 * ${space(8)});
    margin-top: ${space(3)};
    padding: ${space(8)};
    border-top-left-radius: ${space(10)};
  }
`;

const Title = styled.h1`
  margin: ${space(0, 0, 1)};
  color: ${color("gray", 900)};
  ${displayFont("sm", "medium")}
`;

const Info = styled.div`
  margin-bottom: ${space(8)};
  color: ${color("gray", 500)};
  ${textFont("md", "semibold")}
`;

const Footer = styled.footer`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  text-align: center;
  position: absolute;
  gap: ${space(6)};
  padding-block: ${space(6)};
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${color("gray", 50)};
  padding: 13px ${space(8)};

  @media (min-width: ${breakpoint("desktop")}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Version = styled.div`
  color: ${color("gray", 400)};
  order: 2;

  @media (min-width: ${breakpoint("desktop")}) {
    order: 1;
  }
`;

const FooterNav = styled.div`
  display: flex;
  gap: ${space(6)};
  order: 0;

  a {
    color: ${color("gray", 500)};
    text-decoration: none;
    ${textFont("md", "medium")};
  }

  @media (min-width: ${breakpoint("desktop")}) {
    order: 1;
  }
`;

const Logo = styled(Image)`
  order: 1;
  margin-inline: auto;

  @media (min-width: ${breakpoint("desktop")}) {
    margin-inline: 0;
    order: 2;
  }
`;

export function PageContainer({ children, title, info }: PageContainerProps) {
  // combine title in a single string to prevent below warning
  // "Warning: A title element received an array with more than 1 element as children."
  const documentTitle = `ProLog - ${title}`;
  return (
    <Container>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SidebarNavigation />
      <Main>
        <ContentContainer>
          <Title>{title}</Title>
          <Info>{info}</Info>
          {children}
          <Footer>
            <Version>Version: {packageInfo.version}</Version>
            <FooterNav>
              <Link href="#">Docs</Link>
              <Link href="#">API</Link>
              <Link href="#">Help</Link>
              <Link href="#">Community</Link>
            </FooterNav>
            <Logo src="/images/Logo.png" width={23} height={33} alt="" />
          </Footer>
        </ContentContainer>
      </Main>
    </Container>
  );
}
