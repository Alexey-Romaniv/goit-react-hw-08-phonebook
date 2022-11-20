import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { Suspense } from 'react';
import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={s.layoutBox}>
      <AppBar />
      <UserAuthMenu />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
