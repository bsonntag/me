import { spacing } from 'styles/spacing';
import colors from 'styles/colors';
import styled from 'styled-components';

const SkipLink = styled.a`
  background-color: ${colors.white};
  color: ${colors.textColor};
  left: 0;
  outline: none;
  padding: ${spacing.small};
  position: fixed;
  text-decoration: none;
  top: 0;
  transform: translateY(-100%);
  transition: transform 200ms ease-in-out;

  &:focus {
    transform: translateY(0);
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default SkipLink;
