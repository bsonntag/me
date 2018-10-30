import { cleanup, render } from 'react-testing-library';
import { typography } from 'styles/typography';
import React from 'react';
import Type from './type';

describe('Type', () => {
  afterEach(cleanup);

  it('should render the children', () => {
    const { container } = render(
      <Type.title>
        {'Foo'}
      </Type.title>
    );

    expect(container).toHaveTextContent('Foo');
  });

  it('should render raw content', () => {
    const { getByText } = render(
      <Type.paragraph raw>
        {'<strong>foo</strong>'}
      </Type.paragraph>
    );

    const element = getByText('foo');

    expect(element.tagName).toBe('STRONG');
  });

  it('should apply the typography element styles', () => {
    const { getByText } = render(
      <Type.heading>
        {'Foo'}
      </Type.heading>
    );

    const element = getByText('Foo');

    expect(element).toHaveStyleRule('font-weight', 'normal');
    expect(element).toHaveStyleRule(
      'font-size',
      `${typography.heading.fontSize}px`
    );
  });
});
