import { Outlet, useLocation } from 'react-router-dom';
import { SearchForm } from 'components/SearchBar/SearchBar';

const MoviePage = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/movies' && <SearchForm />}
      <Outlet />
    </div>
  );
};

export default MoviePage;
