//components
import Access from "@/components/blog/admin/Access/Access";
import NoAccess from "@/components/blog/admin/NoAccess/NoAccess";
import ProtectedRoute from "@/components/blog/protected-route/ProtectedRoute";

const Home = () => {
  
  const hasAccess = true

  return (
    <ProtectedRoute>
    {hasAccess ? <Access /> : <NoAccess />}
    </ProtectedRoute>
  )
  
};

export default Home;
