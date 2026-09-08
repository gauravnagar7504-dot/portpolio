import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check for legacy hash routes like /#category/hotels-resorts
    if (hash && hash.startsWith('#category/')) {
      const slug = hash.replace('#category/', '');
      navigate(`/category/${slug}`, { replace: true });
      return;
    }

    if (hash) {
      // Allow DOM to settle, then scroll to section
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash, navigate]);

  return null;
}
