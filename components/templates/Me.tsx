import React, { ReactElement } from 'react';
import { Text, ExternalLink } from '@atoms';
import { InformationEntry, IInformationEntry } from '@organisms';
import styled from 'styled-components';

export interface IMe extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for information component displayed at top
   */
  informationEntryProps: IInformationEntry;

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
    informationEntryProps,
    contactHeader,
    emailEmoji,
    email,
    phoneNumberEmoji,
    phoneNumber,
    ...props
  },
): ReactElement => (
  <SMeContainer {...props}>
    <InformationEntry {...informationEntryProps} />
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
