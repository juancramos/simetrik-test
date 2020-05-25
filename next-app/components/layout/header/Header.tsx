import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as constants from '@shared/constants';
import { Navbar } from './components/navbar';
import { Row, Column } from '../../grid';

type HeaderKeysProps = {
  refs: {
    to: string,
    content: string,
    isExternal: boolean,
  }[],
  name: string,
  title: string,
}[];

const HeaderComponent = () => {
  const router = useRouter();
  const pathName = router && router.pathname;
  const [keys] = useState<HeaderKeysProps>([
    {
      refs: [{ to: constants.LIST_URL, content: 'Lista', isExternal: false }],
      name: 'lista',
      title: '',
    },
  ]);

  const renderLink = (name: string, to: string, content: string
    , isExternal: boolean): JSX.Element => {
    if (isExternal) return (<a key={`${name}-/${to}`} href={to}>{content}</a>);
    return (<Link key={`${name}-/${to}`} href={to}><a>{content}</a></Link>);
  };

  const getKey = (name: string) => keys.find(key => key.refs.some(ref => `/${ref.to}` === name));

  const getInitialId = (pathName: string) => {
    const key = getKey(pathName);
    return key && key.refs.length > 1 ? key.name
      : key && key.name ? `${key.name}-${pathName}` : pathName;
  };

  return (
    <header>
      <Row>
        <Column size={1}>
          <Navbar logo='/images/icons/logo.png'
            initialId={getInitialId(pathName)}
            rightMenu={[<a key={constants.CONTACT_URL}
              href={constants.CONTACT_URL} >Contacto</a>]} >
            {keys.map((key) => {
              const { refs, name } = key;
              if (refs.length === 1) {
                const { to, content, isExternal } = refs[0];
                return renderLink(name, to, content, isExternal);
              }
            })}
          </Navbar>
        </Column>
      </Row>
    </header>
  );
};

export default HeaderComponent;
