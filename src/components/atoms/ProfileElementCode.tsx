/* eslint-disable react/no-danger */
import { VFC } from 'react';
import DOMPurify from 'dompurify';

import ProfileCodeWrap from './ProfileElementCode.style';

type Props = {
  afterCode: string;
};

const ProfileElementCode: VFC<Props> = ({ afterCode }) => (
  <ProfileCodeWrap>
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(afterCode) }} />
  </ProfileCodeWrap>
);

export default ProfileElementCode;
