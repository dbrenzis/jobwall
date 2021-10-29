import React, {useState, useEffect} from 'react'
import {Switch, Route, useLocation} from "react-router-dom"
import Header from './Components/Header/Header'
import ProfessionFilter from './Components/ProfessionFilter/ProfessionFilter'
import DisplayFilter from './Components/DisplayFilter/DisplayFilter'
import JobCard from './Components/JobsContent/JobCard/JobCard'
import UnternehmensCard from "./Components/CompanyContent/UnternehmensCard/UnternehmensCard"
import List from './Components/List/List'
import {CompanyWJobsProvider} from './Components/Context/CompanyWJobsContext'
import SavedJobList from './Components/SavedJobList/SavedJobList'
import Tutorial from './Components/Tutorial/Tutorial'

export default function App () {

  const location = useLocation().pathname
  
  const filterLocation = () => {
    if(location === "/")
      return ["/"]
    const id = parseInt(location.match(/\d/g).join(""))
    const route = location.match(/[a-z]/g).join("")
    return [route,id]
  }

  const [currentLocation, setcurrentLocation] = useState(filterLocation())
  const [isJoblist, setisJoblist] = useState(true)

  const handleChangeJoblistView = (name) => {
    if(name === "jobliste")
        setisJoblist(true)
    if(name === "companyliste")
        setisJoblist(false)
  }

  useEffect(() => {
    if(location === "/")
      setcurrentLocation(["/"])
    else{ 
      const id = parseInt(location.match(/\d/g).join(""))
      const route = location.match(/[a-z]/g).join("")
      setcurrentLocation( [route,id] )
    }
  }, [location])

  const [checked, setChecked] = useState(false);

  const [tutorialStep, settutorialStep] = useState(0)

  return (
    <React.Fragment>
      <CompanyWJobsProvider>
        <Header/>
        <ProfessionFilter tutorialStep={tutorialStep} currentLocation={currentLocation} setChecked={setChecked}/>
        <DisplayFilter tutorialStep={tutorialStep} currentLocation={currentLocation} isJoblist={isJoblist} handleChangeJoblistView={handleChangeJoblistView}/>
        <SavedJobList checked={checked} setChecked={setChecked} tutorialStep={tutorialStep}/>
        <Tutorial tutorialStep={tutorialStep} settutorialStep={settutorialStep} setChecked={setChecked}/>
        <Switch>
            <Route path="/jobs/:id">
              <JobCard/>
            </Route>

            <Route path="/unternehmen/:id">
              <UnternehmensCard/>
            </Route>

            <Route path="/">
                <List tutorialStep={tutorialStep} isJoblist={isJoblist} />
            </Route>
        </Switch>
      </CompanyWJobsProvider>
    </React.Fragment>
  )
}