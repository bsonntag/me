// @flow

import { ExternalLink } from 'client/components/links';
import type { Translate } from 'client/locales';
import { margin, units } from 'client/styles';
import { translator } from 'client/locales';
import Icon from 'client/components/icon';
import React from 'react';
import Type from 'client/components/type';
import styled from 'styled-components';

type Props = {
  className?: string,
  translate: Translate,
  url: string,
};

const facebookUrl = url => `https://www.facebook.com/sharer/sharer.php?u=${url}`;

const twitterUrl = url => `https://twitter.com/home?status=${url}`;

const Container = styled.div`
  align-items: center;
  display: flex;

  > :not(:last-child) {
    ${margin.right('small')}
  }
`;

const ScallingLink = styled(ExternalLink)`
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Share = ({ className, translate, url }: Props) => (
  <Container className={className}>
    <Type.caption>
      {translate('share')}
    </Type.caption>

    <ScallingLink href={facebookUrl(url)}>
      <Icon.facebook size={units(4)} />
    </ScallingLink>

    <ScallingLink href={twitterUrl(url)}>
      <Icon.twitter size={units(4)} />
    </ScallingLink>
  </Container>
);

export default translator(Share);
