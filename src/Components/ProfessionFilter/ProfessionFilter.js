import React, {useContext} from 'react'
import {CompanyWJobsContext} from '../Context/CompanyWJobsContext'
import ProfessionButton from './ProfessionButton'
import BookmarkList from '../../public/BookmarkList.svg'
import {filterNames} from '../../data/config'

export default function NavBar(props) {

    const {currentLocation, setChecked, tutorialStep} = props
    const {selection, setSelection, jobListInit, companyListInit, bookmarkList} = useContext(CompanyWJobsContext)

    const handleChange = (event) => {
        const {name} = event.target

        setSelection( prev => {
            if(prev.includes(name))
                return prev.filter(item => item !==name)
            else
                return [...prev,name]
        })
    }

    let company = null
    if(currentLocation && currentLocation[0] === "unternehmen")
        company = companyListInit.current.find(company => company.fid === currentLocation[1])

    let job = null
    if(currentLocation && currentLocation[0] === "jobs")
        job = jobListInit.current.find(job => job.jobid === currentLocation[1])

    const isTutorial = tutorialStep === 0
    const lastIndex = filterNames.length-1
    const buttonOutputArray = filterNames.map( (item,index) => {

        let disabled = false

        if(company && !company.tags.includes(item))
            disabled = true

        if(job && job.tag !== item)
            disabled = true

        return <ProfessionButton isTutorial={isTutorial} key={item} disabled={disabled} buttonName={item} checked={selection.includes(item)} handleChange={handleChange} isFirst={!index} isLast={!(index-lastIndex)}/>
    })

    const handleChangeChecked = () => {
        setChecked(prev => !prev);
      };

    const alertBookmark = <div className="mb-2 ml-2 position-absolute rounded-circle bg-rot text-white font-weight-bold d-flex justify-content-center align-items-center" style={{height:"15px", width:"16px", fontSize:"9px"}}>{bookmarkList.length}</div>
    
    const isTutorialStep3 = tutorialStep === 2 || tutorialStep === 3
    return (    
        <nav>
            <div className="row no-gutters align-items-end pl-3 bg-washedwhite" style={{height:"50px"}}>
                {buttonOutputArray}
                <div className="col-2" style={{zIndex: isTutorialStep3 && 1}}>
                    <button onClick={handleChangeChecked} className="d-flex justify-content-center align-items-center ml-auto border border-right-0 rounded-left bg-white" style={{height:"40px", width:"50px"}}>
                        <img className="" src={BookmarkList} alt=""/>
                        {bookmarkList.length > 0 && alertBookmark}
                    </button>
                </div>
            </div>
        </nav>
    )
}