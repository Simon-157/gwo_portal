import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/authUser';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      // User is not authenticated, redirect to login page
      router.replace('/auth/login');
    }
  }, [loading, user, router]);

  // Render the protected route if the user is authenticated
  return (
   <>
   {loading ? <div> ..... loading</div>: null}
   {user && <>{children}</> }
   </> 
   
    )
};

export default ProtectedRoute;
