import PropTypes from 'prop-types';

import s from './Section.module.scss';

export const Section = ({ children }) => {
  return (
    <>
      <section className={s.section}>{children}</section>
    </>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};