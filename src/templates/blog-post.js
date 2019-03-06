import { Heading, Paragraph, SubTitle } from 'components/typography';
import { Helmet } from 'react-helmet';
import { Link } from 'components/links/link';
import { compose, head, replace, split, trim } from 'lodash/fp';
import { graphql } from 'gatsby';
import { ifProp, prop } from 'styled-tools';
import { renderDate } from 'utils/date';
import { resolve } from 'url';
import { spacing } from 'styles/spacing';
import { translate } from 'locales';
import CommentBox from 'components/blog/comment-box';
import Markdown from 'components/markdown';
import PageLayout from 'components/page-layout';
import React from 'react';
import Share from 'components/blog/share';
import styled, { css } from 'styled-components';

const getFirstParagraph = compose(
  trim,
  replace('\n', ' '),
  head,
  split('\n\n')
);

const Title = styled(Heading)`
  margin-bottom: 0;
`;

const PostDate = styled(Paragraph)`
  margin-bottom: ${spacing.medium};
`;

const StyledShare = styled(Share)`
  justify-content: flex-end;
  margin-top: ${spacing.large};

  ${ifProp('hasCommentSection', css`
    margin-bottom: ${spacing.medium};
  `)}
`;

const CommentsContainer = styled.div`
  margin-bottom: ${spacing.medium};
`;

const CommentsTitle = styled(SubTitle)`
  margin-bottom: ${spacing.small};
`;

const LinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.small};
  justify-content: ${prop('alignment', 'flex-start')};
`;

function getLinksAlignment(previous, next) {
  if (previous && next) {
    return 'space-between';
  } else if (next) {
    return 'flex-end';
  }
}

const BlogPost = ({ data, location, pageContext }) => {
  const { next, previous } = pageContext;
  const { baseUrl, remarkboxKey } = data.site.siteMetadata;
  const { frontmatter, rawMarkdownBody } = data.markdownRemark;
  const { date, title } = frontmatter;
  const hasCommentSection = !!remarkboxKey;

  return (
    <PageLayout baseUrl={baseUrl}>
      <article>
        <Helmet>
          <title>
            {title}
          </title>

          <meta
            content={getFirstParagraph(rawMarkdownBody)}
            property={'og:description'}
          />
        </Helmet>

        <Title>
          {title}
        </Title>

        <PostDate>
          {renderDate(date)}
        </PostDate>

        <Markdown source={rawMarkdownBody} />
      </article>

      <StyledShare
        hasCommentSection={hasCommentSection}
        label={translate('blogPost.share')}
        url={baseUrl + location.pathname}
      />

      {hasCommentSection && (
        <CommentsContainer>
          <CommentsTitle>
            {translate('blogPost.comments.title')}
          </CommentsTitle>

          <CommentBox
            remarkboxKey={remarkboxKey}
            threadFragment={location.hash}
            threadUri={resolve(baseUrl, location.pathname)}
          />
        </CommentsContainer>
      )}

      {(previous || next) && (
        <LinksList alignment={getLinksAlignment(previous, next)}>
          {previous && (
            <li>
              <Link to={previous.frontmatter.path}>
                {'← '}
                {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.frontmatter.path}>
                {next.frontmatter.title}
                {' →'}
              </Link>
            </li>
          )}
        </LinksList>
      )}
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date
        title
      }
      rawMarkdownBody
    }
    site {
      siteMetadata {
        baseUrl
        remarkboxKey
      }
    }
  }
`;

export default BlogPost;
