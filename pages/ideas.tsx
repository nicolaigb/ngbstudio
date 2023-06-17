import React from 'react';
import styled from 'styled-components';
import { Layout } from '@templates';
import { Text, ExternalLink } from '@atoms';

const IdeasPage = () => (
  <Layout>
    <SFrame src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FwrOKJmJRMyHLn2FrAvzRw8%2FWebsite%3Ftype%3Ddesign%26node-id%3D1%253A251%26t%3DkV30QzqvHBNJ0zZA-1" allowfullscreen />
    <SContainer>
      <Text className="subheader" styleType="subheader">Ideas</Text>
      <Text styleType="regular">
        <p>Due to the highly mercurial nature of the world wibe web, nothing you see here is ever permanent. To that end, I've linked to the Figma file behind this site. Feel free to browse through and preview what I'm working on. If you're up for it, leave me a comment with an idea you have or something you want fixed.</p>
        <p>The Github repo for end-i.ng is <ExternalLink href="https://github.com/nicog98/ng-web">here</ExternalLink>. Open to PRs.</p>
        <p>I appreciate your support 🩵</p>
      </Text>
    </SContainer>
  </Layout>
);

const SContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.Spacing.wide} 0;
  .subheader {
    margin-bottom: ${({ theme }) => theme.Spacing.regular}
  }
`;

const SFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  border: 0.5px solid ${({ theme }) => theme.Colors.lightGrey}
`;

export default IdeasPage;
