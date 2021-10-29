import React, {useContext} from 'react'
import {CompanyWJobsContext} from '../../Context/CompanyWJobsContext'
import UnternehmensItem from './UnternehmensItem';

export default function UnternehmensList() {

    const {companyList, selection} = useContext(CompanyWJobsContext)

    if(!companyList)
        return <h1>Loading..</h1>


    const companyItemList = companyList.map( item => <UnternehmensItem key={item.fid} data={item} selection={selection} /> );
    
    return (
        <ul className="list-group">
            <h2 className="mt-3 mb-2" style={{fontSize: "17px"}}>
                {`${companyList.length} Treffer`}
            </h2>
            {companyItemList}
        </ul>
    )
}
