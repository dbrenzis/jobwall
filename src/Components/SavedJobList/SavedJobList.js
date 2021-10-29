import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Cancel from '../../public/Cancel.svg'
import UnternehmensCardItem from '../CompanyContent/UnternehmensCard/UnternehmensCardItem'
import {CompanyWJobsContext} from '../Context/CompanyWJobsContext'

const useStyles = makeStyles(theme => ({
  wrapper: {
  position: "fixed",
  height:"100%",
  width: "100%",
  top:0,
  display: "flex",
  justifyContent: "flex-end",
  overflow: "hidden",
  backgroundColor: "rgba(220,220,220,0.5)"
  }
}));

export default function SavedJobList(props) {

  const {checked, setChecked, tutorialStep} = props
  const {jobListInit, bookmarkList, toggleBookmark} = useContext(CompanyWJobsContext)
  const classes = useStyles();

  const bookmarkedJobList = jobListInit.current.filter(job => bookmarkList.includes(job.jobid))

  const jobItemList = bookmarkedJobList.map(job => <UnternehmensCardItem key={job.jobid} job={job} saved={true} toggleBookmark={toggleBookmark}/>)

  const isTutorial = tutorialStep === 4 || tutorialStep === 5

  return (
    <div className={classes.wrapper} style={{visibility: checked ? "visible" : "hidden", zIndex: isTutorial && 1 }}>
      <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
        <Paper elevation={4} className="rounded-left" style={{marginTop:"60px", height:"625px", width:"97%", visibility:"visible", overflow:"scroll"}}>
          <div className="container-fluid">
            <div className="mt-2 d-flex justify-content-end align-items-center" style={{height:"40px"}}>
              <img src={Cancel} alt="close" onClick={() => setChecked(false)}/>
            </div>
            <div className="font-weight-bolder" style={{fontSize:"22px" }}>
              Merkliste
            </div>
            <ul className="list-group pt-2" >
              {jobItemList}
            </ul>
          </div>
        </Paper>
      </Slide>
    </div>
  );
}
