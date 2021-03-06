/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { VFC } from 'react';
import { Ul, Li } from 'components/molecules/HeaderNav.style';

type Props = {
  scrollToSection: (id: string) => void;
  workId?: string | undefined;
};

const HeaderNav: VFC<Props> = ({ scrollToSection, workId }) => (
  <nav>
    <Ul>
      <Li
        className={workId ? '' : 'selectList'}
        onClick={() => {
          scrollToSection('Start');
        }}
      >
        Start <span>/&gt;</span>
      </Li>
      <Li
        onClick={() => {
          scrollToSection('About');
        }}
      >
        About <span>/&gt;</span>
      </Li>
      <Li
        onClick={() => {
          scrollToSection('Profile');
        }}
      >
        Profile <span>/&gt;</span>
      </Li>
      <Li
        className={workId ? 'selectList' : ''}
        onClick={() => {
          scrollToSection('Works');
        }}
      >
        Works <span>/&gt;</span>
      </Li>
      <Li
        onClick={() => {
          scrollToSection('Contact');
        }}
      >
        Contact <span>/&gt;</span>
      </Li>
    </Ul>
  </nav>
);

export default HeaderNav;
