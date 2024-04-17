// _app.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../app/globals.css'; // Import global styles here

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Subscribe to router events
    const handleRouteChange = (url) => {
      console.log('Route is changing to:', url);
      // Additional logic for handling route changes
    };
    router.events.on('routeChangeStart', handleRouteChange);

    // Unsubscribe from router events on component unmount
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
