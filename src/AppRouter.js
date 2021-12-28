import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LinkGraph from './components/linkGraph';
import Main from './pages/Main';

const AppRouter = () => {
  const [theme, setTheme] = useState(null);
  const [icon, setIcon] = useState(null);
  const [postData, setPostData] = useState({ username: '', reposName: '' });
  const getClassTheme = (e) => {
    e.preventDefault();
    setTheme(e.target.value);
  };
  const getIcon = (e) => {
    e.preventDefault();
    setIcon(e.target.value);
  };
  return (
    <Routes>
      <Route
        path='/:username/:reposName'
        exact
        element={(
          <LinkGraph
            icon={icon}
            postData={postData}
            theme={theme}
            getIcon={getIcon}
          />
             )}
      />

      <Route
        path='/'
        element={(
          <Main
            icon={icon}
            theme={theme}
            postData={postData}
            setPostData={setPostData}
            getIcon={getIcon}
            getClassTheme={getClassTheme}
          />
      )}
      />
    </Routes>

  );
};

export default AppRouter;
