// @flow

import type { Config } from 'common/types';
import { Helmet } from 'react-helmet';
import type { Post } from 'blog';
import type { RouteProps } from 'client/types';
import type { TranslateProps } from 'client/locales';
import { compose, head, replace, split, trim } from 'lodash/fp';
import { getBlogPost } from 'blog';
import { ifProp } from 'styled-tools';
import { margin } from 'client/styles';
import { renderDate } from 'client/utils';
import { translator } from 'client/locales';
import CommentBox from 'client/components/comment-box';
import Markdown from 'client/components/markdown';
import React from 'react';
import Share from 'client/components/share';
import Type from 'client/components/type';
import styled, { css } from 'styled-components';
import withConfig from 'client/hocs/with-config';

type Props = {
  blog: {
    posts: Array<Post>,
  },
  config: Config,
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

const Content = styled.div`
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

const BlogPost = ({ config, location, match, translate }: Props) => {
  const { postId } = match.params;
  const { content, date, title } = getBlogPost(postId);
  const hasCommentSection = !!config.get('remarkbox.key');

  return (
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

      <Content>
        <Markdown source={content} />
      </Content>

      <StyledShare
        hasCommentSection={hasCommentSection}
        url={config.get('baseUrl') + location.pathname}
      />

      {hasCommentSection && (
        <div>
          <CommentsTitle>
            {translate('blogPost.comments.title')}
          </CommentsTitle>

          <CommentBox />
        </div>
      )}
    </article>
  );
};

export default compose(
  withConfig,
  translator
)(BlogPost);
