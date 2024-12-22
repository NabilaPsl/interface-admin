import { useEffect, useState } from 'react'; 
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import EmployeeDash from './components/Tables/EmployeDash';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import DefaultLayout from './layout/DefaultLayout';
import FormProfile from './pages/Form/FormProfile';
import TaskManager from './pages/Form/Tache';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
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
              <PageTitle title="Page d'acces" />
              <EmployeeDash />
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
          path="/form/Tache"
          element={
            <>
              <PageTitle title="Les Taches" />
              <TaskManager />
            </>
          }
        />

        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin" />
              <SignIn />
            </>
          }
        />

        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup " />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
