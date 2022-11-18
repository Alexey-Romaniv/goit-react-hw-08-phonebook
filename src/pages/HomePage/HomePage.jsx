// import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import s from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={s.homePageBox}>
      <h1>
        Welcome to the Phonebook app! Here you can create and save your contact
        list. To do this, you have to register to create your own account!
        Select "Registration" in the menu to get started!
      </h1>
    </div>
  );
};
