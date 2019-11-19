import { Paragraph, Title } from './typography';
import { cleanup, render } from 'react-testing-library';
import React from 'react';

describe('Typography components', () => {
  afterEach(cleanup);

  it('should render the children', () => {
    const { container } = render(<Title>Foo</Title>);

    expect(container).toHaveTextContent('Foo');
  });

  it('should render raw content', () => {
    const { getByText } = render(
      <Paragraph raw>{'<strong>foo</strong>'}</Paragraph>
    );

    const element = getByText('foo');

    expect(element.tagName).toBe('STRONG');
  });
});
