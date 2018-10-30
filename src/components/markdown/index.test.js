import { render } from 'react-testing-library';
import Markdown from '.';
import React from 'react';

describe('Markdown', () => {
  it('should render the markdown source', () => {
    const { container, unmount } = render(<Markdown source={'Foo bar'} />);

    expect(container).toHaveTextContent('Foo bar');

    unmount();
  });

  it('should render headings', () => {
    const source = `
# Foo
## Bar
### Baz
#### Bez
    `;

    const { getByText, unmount } = render(<Markdown source={source} />);
    const heading = getByText('Foo');
    const title = getByText('Bar');
    const subtitle = getByText('Baz');
    const otherTitle = getByText('Bez');

    expect(heading.tagName).toBe('H1');
    expect(title.tagName).toBe('H2');
    expect(subtitle.tagName).toBe('H3');
    expect(otherTitle.tagName).toBe('H4');

    unmount();
  });

  it('should render paragraphs', () => {
    const { getByText, unmount } = render(<Markdown source={'Foo bar'} />);
    const paragraph = getByText('Foo bar');

    expect(paragraph.tagName).toBe('P');

    unmount();
  });

  it('should render external links', () => {
    const source = '[foo](http://example.com/)';

    const { getByText, unmount } = render(<Markdown source={source} />);
    const link = getByText('foo');

    expect(link.tagName).toBe('A');
    expect(link.target).toBe('_blank');
    expect(link.href).toBe('http://example.com/');

    unmount();
  });

  it('should render inline code', () => {
    const { getByText, unmount } = render(<Markdown source={'`foo`'} />);
    const inlineCode = getByText('foo');

    expect(inlineCode.tagName).toBe('CODE');

    unmount();
  });

  it('should render code blocks', () => {
    const source = `
\`\`\`js
foo
\`\`\`
    `;

    const { getByText, unmount } = render(<Markdown source={source} />);
    const codeBlock = getByText('foo').parentNode;

    expect(codeBlock.tagName).toBe('PRE');
    expect(codeBlock.firstChild.tagName).toBe('CODE');

    unmount();
  });
});
