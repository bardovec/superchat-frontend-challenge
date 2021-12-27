import React, {useState} from 'react';
import Main from "./pages/Main";
import './css/App.css'
import { BrowserRouter } from "react-router-dom";
import LinkGraph from "./components/linkGraph";
import AppRouter from "./router";

const App = () => {
    const [shows, setShows] = useState(false)
    const [theme, setTheme] = useState(null)
    const [icon, setIcon] = useState(null)
    const [postData, setPostData] = useState({username: '', reposName: ''});

    const getClassTheme = (e) => {
        e.preventDefault()
        setTheme(e.target.value)
    }
    const getIcon = (e) => {
        e.preventDefault()
        setIcon(e.target.label)

    }
    return (
        <BrowserRouter>
            {shows
                ?
                <
                    LinkGraph
                    icon={icon}
                    postData={postData}
                    setShows={setShows}
                    theme={theme}
                />
                :
                <
                    Main setShows={setShows}
                         postData={postData}
                         setPostData={setPostData}
                         getIcon={getIcon}
                         getClassTheme={getClassTheme}
                />
            }


        </BrowserRouter>
    )

};

export default App;
