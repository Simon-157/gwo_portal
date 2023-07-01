//components
import ProtectedRoute from "@/components/protected-route/ProtectedRoute";
import NoOngoingJourney from "./no_ongoing_journey/NoOngoingJourney";
import OnGoingJourney from "./ongoing_journey/OnGoingJourney";
import { useEffect, useState } from "react";

const Home = () => {
  const [journeys, setJourneys] = useState({})

  const hasAccess = false

  return (
    <ProtectedRoute>
    {hasAccess ? <OnGoingJourney /> : <NoOngoingJourney />}
    </ProtectedRoute>
  )
  
};

export default Home;
