import { Outlet, useLocation } from 'react-router-dom';
import { SearchForm } from 'components/SearchBar/SearchBar';

export const MoviePage = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/movies' && <SearchForm />}
      <Outlet />
    </>
  );
};
