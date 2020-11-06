import Link from 'next/link';

import { SITE_NAME } from '../../config/app';
import { Container } from './style';

export const Header = () => {
  return (
    <Container>
      <Link href="/">
        <a>{SITE_NAME}</a>
      </Link>
    </Container>
  );
};
