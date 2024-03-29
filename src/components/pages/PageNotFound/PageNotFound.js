import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound () {
  return (
    <section className="page-not-found">
      <h1 className="page-not-found__error-code">404</h1>
      <p className="page-not-found__signature">Страница не найдена</p>
      <Link className="page-not-found__come-back-link" to="/signin">Назад</Link>
    </section>
  );
}

export default PageNotFound;