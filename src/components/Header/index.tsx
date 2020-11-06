import Link from 'next/link';

import { SITE_NAME } from '../../config/app';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Container>
      <Link href="/">
        <a>{SITE_NAME}</a>
      </Link>
    </Styled.Container>
  );
};
