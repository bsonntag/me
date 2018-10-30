import { margin } from 'styles/spacing';
import { renderInnerHtml } from 'utils/html';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 100%;

  ${margin.vertical('small')}
`;

const Html = ({ value }) => (
  <Wrapper dangerouslySetInnerHTML={renderInnerHtml(value)} />
);

export default Html;
