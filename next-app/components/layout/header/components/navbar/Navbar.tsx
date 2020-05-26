import React, { FunctionComponent, useState, SyntheticEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  NavbarContainer, NavContainer, NavRightContainer, NavItemContainer,
  NavLogoContainer, NavMobileItemContainer, BackgroundMenuContainer, MenuContainer,
  MobileHeaderContainer, NavIconContainer, NavMovileContainer, Hr,
} from './components';
import { NavbarProps } from './types';
import { ReactElementLike, ReactNodeLike } from 'prop-types';
import { StyledComponent } from 'styled-components';

export const Navbar: FunctionComponent<NavbarProps> = (props: NavbarProps) => {
  const { logo, children, rightMenu, mobilePrimaryItem, initialId } = props;
  const [selectedId, setSelectedId] = useState<string>(initialId ? initialId : '/');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleClick = (event: SyntheticEvent, id: string) => {
    setSelectedId(id);
    if (event && event.target && event.target['lastChild']) {
      const { click } = event.target['lastChild'] as HTMLElement;
      click && event.target['lastChild'].click();
    }
  };

  const composeComponent = (Component: StyledComponent<React.FunctionComponent<any>, any>,
    items: ReactNodeLike[] | null | undefined, prefix: string): JSX.Element[]
    | null | undefined => {
    return items && items.map((item: ReactElementLike |
      ReactNodeLike, index: number) => {
      const { key } = item as ReactElementLike;
      const id = key ? key.toString() : `${prefix}-${index}`;
      return (
        <Component key={id} selected={selectedId === id}
          onClick={(event: SyntheticEvent) => handleClick(event, id)}>
          <section>
            {item}
          </section>
        </Component>
      );
    });
  };

  return (
    <>
      <NavbarContainer>
        <NavContainer>
          <NavLogoContainer>
            <section>
              <a href='/'>
                <img src={logo} alt='nav logo' data-src={logo} />
              </a>
            </section>
          </NavLogoContainer>
          <NavItemContainer key='/' selected={selectedId === '/'}
            onClick={(event: SyntheticEvent) => handleClick(event, '/')}>
            <section>
              <a href='/'>Inicio</a>
            </section>
          </NavItemContainer>
          {composeComponent(NavItemContainer, children, 'left')}
        </NavContainer>
        <NavRightContainer>
          {rightMenu && composeComponent(NavItemContainer, rightMenu, 'right')}
          {mobilePrimaryItem && <NavIconContainer>
            {mobilePrimaryItem}
          </NavIconContainer>}
          <NavIconContainer>
            <div onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </NavIconContainer>
        </NavRightContainer>
      </NavbarContainer>
      {menuOpen &&
        <>
          <BackgroundMenuContainer />
          <MenuContainer>
            <MobileHeaderContainer>
              <section>
                <h2>Menú</h2>
                <NavIconContainer>
                  <div onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                </NavIconContainer>
              </section>
            </MobileHeaderContainer>
            <NavMovileContainer>
              <NavMobileItemContainer key='/' selected={selectedId === '/'}
                onClick={(event: SyntheticEvent) => handleClick(event, '/')}>
                <section>
                  <a href='/'>
                    Inicio
                                    </a>
                </section>
              </NavMobileItemContainer>
              {composeComponent(NavMobileItemContainer, children, 'right')}
              <Hr />
              {rightMenu && composeComponent(NavMobileItemContainer, rightMenu, 'right')}
            </NavMovileContainer>
          </MenuContainer>
        </>
      }
    </>
  );
};
