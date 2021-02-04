import React, { ReactElement } from 'react';
import { Text, ExternalLink } from '@atoms';
import styled from 'styled-components';

export interface IMe extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Text displayed for what I do
   */
  aboutText: string;

  /**
   * First link displayed beneath text
   */
  upperSocialLink: string;

  /**
   * Text for upper link
   */
  upperSocialLinkText: string;

  /**
   * Second link
   */
  bottomSocialLink: string;

  /**
   * Text displayed with bottom social link
   */
  bottomSocialLinkText: string;

  /**
   * Header displayed above contact
   */
  contactHeader: string;

  emailEmoji: string;

  /**
   * Email
   */
  email: string;

  /**
   *
   */
  phoneNumberEmoji: string;

  /**
   * Phone number
   */
  phoneNumber: string;
}

export const Me: React.FC<IMe> = (
  {
    aboutText,
    upperSocialLink,
    upperSocialLinkText,
    bottomSocialLink,
    bottomSocialLinkText,
    contactHeader,
    emailEmoji,
    email,
    phoneNumberEmoji,
    phoneNumber,
    ...props
  },
): ReactElement => (
  <SMeContainer {...props}>
    <SAboutText styleType="regular">{aboutText}</SAboutText>
    <ExternalLink href={upperSocialLink}>
      <SSocialText styleType="emphasized">{upperSocialLinkText}</SSocialText>
    </ExternalLink>
    <ExternalLink href={bottomSocialLink}>
      <SSocialText styleType="emphasized">{bottomSocialLinkText}</SSocialText>
    </ExternalLink>
    <SContactHeader styleType="emphasized">{contactHeader}</SContactHeader>
    <SContactContainer>
      <Text styleType="regular">{`${emailEmoji}:`}</Text>
      <ExternalLink href={`mailto:${email}`}>
        <SContact styleType="regular">{email}</SContact>
      </ExternalLink>
    </SContactContainer>
    <SContactContainer>
      <Text styleType="regular">{`${phoneNumberEmoji}:`}</Text>
      <ExternalLink href={`callto:${phoneNumber.replace(/[\s-()]/g, '')}`}>
        <SContact styleType="regular">{phoneNumber}</SContact>
      </ExternalLink>
    </SContactContainer>
  </SMeContainer>
);

const SMeContainer = styled.div``;

const SAboutText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.Spacing.wide};
`;

const SSocialText = styled(Text)`
  color: ${({ theme }) => theme.Colors.emphasis};
  margin-bottom: ${({ theme }) => theme.Spacing.wide};
`;

const SContactHeader = styled(Text)`
  margin-bottom: ${({ theme }) => theme.Spacing.regular};
  color: ${({ theme }) => theme.Colors.emphasis};
`;

const SContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const SContact = styled(Text)`
  margin-bottom: ${({ theme }) => theme.Spacing.tight};
  margin-left: ${({ theme }) => theme.Spacing.condensed};
`;
