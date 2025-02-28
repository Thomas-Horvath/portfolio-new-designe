import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollTop() {
  const { pathname } = useLocation();


  useEffect(() => {
    if (pathname.startsWith('/projects') || pathname.startsWith('/info/') || pathname.startsWith('/blog/')) {

      window.scrollTo(0, 0);
    }
  }, [pathname])

  // nem térünk vissza DOM elemmel ezért van itt null
  return (
    null
  )
}



