import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import EmployeeTable from './components/Tables/EmployeeTable';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import DefaultLayout from './layout/DefaultLayout';
import FormProfile from './pages/Form/FormProfile';
import CheckInCheckOutTable from './pages/CheckI-o/CheckInCheckOutTable';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  // Scroll to the top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Simulate loading screen for 1 second
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Admin profil" />
              <FormProfile />
            </>
          }
        />

        <Route
          path="/forms/form-profile"
          element={
            <>
              <PageTitle title="Form" />
              <FormProfile />
            </>
          }
        />

        <Route
          path="/employees"
          element={
            <>
              <PageTitle title="Page d'accès" />
              <EmployeeTable />
            </>
          }
        />

        <Route
          path="/create"
          element={
            <>
              <PageTitle title="Créer un compte" />
              <Profile />
            </>
          }
        />

        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form" />
              <FormLayout />
            </>
          }
        />

        <Route
          path="/checking"
          element={
            <>
              <PageTitle title="Checking" />
              <CheckInCheckOutTable />
            </>
          }
        />

      
      </Routes>
    </DefaultLayout>
  );
}

export default App;
;
