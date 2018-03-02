// @flow

import { Helmet } from 'react-helmet';
import type { Post } from 'blog';
import type { RouteProps, TranslateProps } from 'client/types';
import { compose, head, replace, split, trim } from 'lodash/fp';
import { getBlogPost } from 'blog';
import { ifProp } from 'styled-tools';
import { margin } from 'client/styles';
import { renderDate } from 'client/utils';
import CommentBox from 'client/components/comment-box';
import Markdown from 'client/components/markdown';
import React, { Fragment } from 'react';
import Share from 'client/components/share';
import Type from 'client/components/type';
import config from 'common/config';
import styled, { css } from 'styled-components';
import translator from 'client/hocs/translator';

type Props = {
  blog: {
    posts: Array<Post>,
  },
} & RouteProps & TranslateProps;

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

const StyledMarkdown = styled(Markdown)`
  ${margin.bottom('large')}
`;

const StyledShare = styled(Share)`
  justify-content: flex-end;

  ${ifProp('hasCommentSection', css`
    ${margin.bottom('medium')}
  `)}
`;

const CommentsTitle = styled(Type.subheading)`
  ${margin.bottom('small')}
`;

const BlogPost = ({ location, match, translate }: Props) => {
  const { postId } = match.params;
  const { content, date, title } = getBlogPost(postId);
  const hasCommentSection = !!config.remarkboxKey;

  return (
    <Fragment>
      <article>
        <Helmet>
          <title>
            {title}
          </title>

          <meta
            content={getFirstParagraph(content)}
            property={'og:description'}
          />
        </Helmet>

        <Title>
          {title}
        </Title>

        <PostDate>
          {renderDate(date)}
        </PostDate>

        <StyledMarkdown source={content} />
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

          <CommentBox />
        </Fragment>
      )}
    </Fragment>
  );
};

export default translator(BlogPost);
