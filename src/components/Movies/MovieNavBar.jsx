import {NavLink} from 'react-router-dom';

function MovieNavBar({movies}) {
    return (
        <div>
        <nav className='comp nav'>
          {movies && movies.map((m, index) => (
            <span key={m.id}>
              <NavLink 
                to={String(m.id)} 
                className={({ isActive }) => isActive ? 'active' : ''}
                style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}}
              >
                {m.title}
              </NavLink>
              {/* Add the '|' separator for all items*/}
              { <span> | </span>}
            </span>
          ))}
        </nav>
      </div>
    )
}

export default MovieNavBar;