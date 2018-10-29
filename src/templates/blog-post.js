import { Helmet } from 'react-helmet';
import { compose, head, replace, split, trim } from 'lodash/fp';
import { graphql } from 'gatsby';
import { ifProp } from 'styled-tools';
import { margin } from 'styles';
import { renderDate } from 'utils/date';
import { translate } from 'locales';
import CommentBox from 'components/comment-box';
import Markdown from 'components/markdown';
import PageLayout from 'components/page-layout';
import React, { Fragment } from 'react';
import Share from 'components/share';
import Type from 'components/type';
import config from 'config';
import styled, { css } from 'styled-components';

const getFirstParagraph = compose(
  trim,
  replace('\n', ' '),
  head,
  split('\n\n')
);

const Title = styled(Type.heading)`
  ${margin.bottom('none')}
`;

const PostDate = styled(Type.paragraph)`
  ${margin.bottom('medium')}
`;

const StyledShare = styled(Share)`
  justify-content: flex-end;

  ${margin.top('large')}

  ${ifProp('hasCommentSection', css`
    ${margin.bottom('medium')}
  `)}
`;

const CommentsTitle = styled(Type.subheading)`
  ${margin.bottom('small')}
`;

const BlogPost = ({ data, location }) => {
  const { frontmatter, rawMarkdownBody } = data.markdownRemark;
  const { date, title } = frontmatter;
  const hasCommentSection = !!config.remarkboxKey;

  return (
    <PageLayout>
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
        url={config.baseUrl + location.pathname}
      />

      {hasCommentSection && (
        <Fragment>
          <CommentsTitle>
            {translate('blogPost.comments.title')}
          </CommentsTitle>

          <CommentBox
            remarkboxKey={config.remarkboxKey}
            threadFragment={location.hash}
            threadUri={config.baseUrl + location.pathname}
          />
        </Fragment>
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
  }
`;

export default BlogPost;
