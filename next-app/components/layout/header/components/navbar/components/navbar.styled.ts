import styled, { css } from 'styled-components';
import { NavbarItemProps } from '../types';

const baseFlexCss = css`
    display: flex;
    align-items: center;
    align-content: center;
    align-self: center;
`;

const baseNavbarCss = css`
    ${baseFlexCss}

    height: 90px;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        height: 64px;
    }

    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 2px 16px 0px rgba(157,154,154,0.2);
`;

const baseMenuCss = css`
    display: flex;
    flex-direction: column;

    position: fixed;
    background-color: #ffffff;
    overflow: scroll;
    top: 0;
    right: 0;
    width: 270px;
    height: 100%;
    color: #000000;
    fill: #000000;
    z-index: 9998;
`;

const baseBackgroundMenu = css`
    position: fixed;
    background-color: #000000;
    opacity: 0.7;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9997;
`;

const baseMobileHeaderCss = css`
    ${baseFlexCss}

    position: fixed;
    top: 0;
    right: 0;
    box-sizing: border-box;
    height: 64px;
    width: 270px;
    padding: 0 15px 0 25px;

    border: 1px solid #eeeeee;
    background-color: #ffffff;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);

    color: #000000;
    font-family: Gilroy;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 33px;

    section {
        flex: 3;
        ${baseFlexCss}
        justify-content: space-between;
    }
`;

const baseNavCss = css`
    ${baseFlexCss}

    list-style: none;
    padding: 0;
    margin: 0;
    height: 42px;
`;

const baseMobileNavCss = css`
    display: flex;
    flex-direction: column;

    list-style: none;
    padding: 0;
    margin: 64px 0 0 0;
`;

const baseNavRightCss = css`
    ${baseNavCss}
    margin-left: auto;
`;

const baseNavItemCss = css`
    ${baseFlexCss}

    height: 42px;

    @media only screen and (min-width: 320px) and (max-width: 1023px) {
        height: 58px;
    }

    margin: 0 15px;
    cursor: pointer;

    a {
        text-decoration: none;
        color: inherit;
        fill: inherit;
    }
`;

const baseMobileNavItemCss = css`
    height: 80px;
    padding: 0 30px;
    cursor: pointer;

    a {
        text-decoration: none;
        color: inherit;
        fill: inherit;
    }

    &:hover {
        color: #b1c1f5;
        fill: #b1c1f5;
        background-color: #f8fafb;
    }
`;

const baseDesktopNavItemCss = css`
    > section {
        ${baseFlexCss}
        position: relative;
        white-space: nowrap;
        width: 100%;
        height: 100%;

        color: #000000;
        font-family: Barlow;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: 24px;
        text-align: center;
    }

    &:hover {
        > section {
            color: #b1c1f5;
            fill: #b1c1f5;
        }
    }
`;

const baseSelectedItemCss = css`
    > section:after {
        position: absolute;
        display: block;
        left: 0;
        right: 0;
        bottom: 20%;
        content: '';
        height: 1.62px;
        border-radius: 4px;
        background-color: #b1c1f5;
    }
`;

const baseMobileMediaQueryCss = css`
    @media only screen and (min-width: 1024px) {
        display: none !important;
    }
`;

export const NavbarContainer = styled.nav`
    ${baseNavbarCss}
`;

export const MenuContainer = styled.div`
    ${baseMenuCss}
`;

export const MobileHeaderContainer = styled.div`
    ${baseMobileHeaderCss}
    ${baseMobileMediaQueryCss}
`;

export const BackgroundMenuContainer = styled.div`
    ${baseBackgroundMenu}

    ${baseMobileMediaQueryCss}
`;

export const NavMovileContainer = styled.ul`
    ${baseMobileNavCss}
`;

export const NavContainer = styled.ul`
    ${baseNavCss}
`;

export const NavRightContainer = styled.ul`
    ${baseNavRightCss}
`;

export const NavLogoContainer = styled.li`
    ${baseNavItemCss}

    img {
        width: 100px;
        height: 40px;
        object-fit: contain;
    }
`;

export const NavItemContainer = styled.li<NavbarItemProps>`
    ${baseNavItemCss}
    ${baseDesktopNavItemCss}
    @media only screen and (min-width: 320px) and (max-width: 1023px) {
        display: none !important;
    }

    ${({ selected }) => selected && baseSelectedItemCss}
`;

export const NavMobileItemContainer = styled.li<NavbarItemProps>`
    ${baseMobileNavItemCss}
    ${baseDesktopNavItemCss}

    ${baseMobileMediaQueryCss}

    ${({ selected }) => selected && baseSelectedItemCss}
`;

export const NavIconContainer = styled.li`
    ${baseNavItemCss}
    color: #3c65ec;
    fill: #3c65ec;

    ${baseMobileMediaQueryCss}
`;

export const Hr = styled.hr`
    width: 100%;
`;
