import Icon from '@/components/icon/icon';
import PostProfile from '@/components/post-profile/post-profile';
import PostTags from '@/components/post-tags/post-tags';
import PostVote from '@/components/post-vote/post-vote';
import Tag from '@/components/tag/tag';
import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import removeMd from 'remove-markdown';

dayjs.extend(relativeTime);

export default function QuestionSummaryCard({
  className, posts, ...rest
}) {
  const fromDay = dayjs().diff(posts.created, 'day');
  const fromAskedDay = `${dayjs().from(dayjs(posts.created))} ago`;
  const askedDate = dayjs(posts.created).format('MMM D \'YY [at] H:mm');

  return (
    <article {...rest} className={classNames('card question-summary-card', className)}>
      <PostVote className="question-summary-card__vote" />
      <div className="question-summary-card__main">
        <Link href="/forum/detail/[id]" as={`/forum/detail/${posts.questionUid}`}>
          <a className="question-summary-card__link">
            <h2 className="question-summary-card__title">{posts.title}</h2>
          </a>
        </Link>
        <p className="question-summary-card__content">{removeMd(posts.content)}</p>
        <PostTags className="question-summary-card__tags">
          {posts.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </PostTags>
        <PostProfile
          className="question-summary-card__profile"
          aria-label="Author"
          author={posts.displayName}
          created={fromDay > '7' ? askedDate : fromAskedDay}
          title={askedDate}
        />
        <ul className="question-summary-card__count">
          <li className="question-summary-card__count-item">
            <Icon type="eye" className="question-summary-card__count-icon" aria-label="View count:" />
            9,813
          </li>
          <li className="question-summary-card__count-item">
            <Icon type="comment" className="question-summary-card__count-icon" aria-label="Comment count:" />
            319
          </li>
        </ul>
      </div>
    </article>
  );
}

QuestionSummaryCard.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.shape({
    authorUid: PropTypes.string,
    displayName: PropTypes.string,
    content: PropTypes.string,
    created: PropTypes.string,
    tags: PropTypes.node,
    title: PropTypes.string,
    questionUid: PropTypes.string,
  }),
};
