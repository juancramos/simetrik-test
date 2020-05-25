export const NavbarDefaultValues = {
  logo: '',
  pathName: '',
};

export type NavbarProps = {
  logo: string,
  initialId: string,
  children: JSX.Element[],
  rightMenu?: JSX.Element[],
  mobilePrimaryItem?: JSX.Element,
};
