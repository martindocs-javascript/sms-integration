import { Link } from 'react-router-dom';

const Error = () => {
  return (    
      <div className='error-page'>
          <h2 className='error-page__title'>404</h2>
          <h3>Ohh! Page Not Found</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link 
            className='error-page__link'
            to="/"
          >back home</Link>
      </div>    
  )
}

export default Error;