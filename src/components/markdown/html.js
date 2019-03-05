import { renderInnerHtml } from 'utils/html';
import { spacing } from 'styles/spacing';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: ${spacing.small};
  margin-top: ${spacing.small};
  max-width: 100%;
`;

const Html = ({ value }) => (
  <Wrapper dangerouslySetInnerHTML={renderInnerHtml(value)} />
);

export default Html;
