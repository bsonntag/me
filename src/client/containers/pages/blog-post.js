// @flow

import { Helmet } from 'react-helmet';
import { type Post, getBlogPost } from 'blog';
import { type RouteProps } from 'client/types';
import { Translator } from 'client/containers/translations';
import { compose, head, replace, split, trim } from 'lodash/fp';
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

type Props = {
  blog: {
    posts: Array<Post>,
  },
} & RouteProps;

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

const BlogPost = ({ location, match }: Props) => {
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

        <Markdown source={content} />
      </article>

      <Translator>
        {translate => (
          <Fragment>
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
        )}
      </Translator>
    </Fragment>
  );
};

export default BlogPost;
