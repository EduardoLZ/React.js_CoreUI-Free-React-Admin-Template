import React, { lazy } from 'react'
import {useState, useEffect} from 'react';
import axios from "axios";
import {
 
  CCard,
  CCardBody,
  
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'





const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))




const Dashboard = () => {
  const [datos, setDatos] = useState([])
  const fet = function() {
    fetch('/datos').then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes =>{
      
      setDatos(jsonRes.results)
      console.log(datos)
    })
  }
useEffect(() => {
fet()
},[])

  return (
    <>
    
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             CONSUMO DE API - https://randomuser.me
            </CCardHeader>
            <CCardBody>
              

              <br />
           
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>User</th>
                    <th className="text-center">Country</th>
                    <th>Usage</th>
                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                {datos.map(usuario => 
               <tr>
               <td className="text-center">
                 <div className="c-avatar">
                   <img src={usuario.picture.thumbnail} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                   <span className="c-avatar-status bg-success"></span>
                 </div>
               </td>
               <td>
                 <div>{usuario.name.first}</div>
                 <div className="small text-muted">
                   <span>{usuario.email}</span> | Registered: Jan 1, 2015
                 </div>
               </td>
               <td className="text-center">
                 <CIcon height={25} name="cif-us" title="us" id="us" />
               </td>
               <td>
                 <div className="clearfix">
                   <div className="float-left">
                     <strong>50%</strong>
                   </div>
                   <div className="float-right">
                     <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                   </div>
                 </div>
                 <CProgress className="progress-xs" color="success" value="50" />
               </td>
               <td className="text-center">
                 <CIcon height={25} name="cib-cc-mastercard" />
               </td>
               <td>
                 <div className="small text-muted">Last login</div>
                 <strong>10 sec ago</strong>
               </td>
             </tr>
              
              
              )} 
                 
                  
                 
               
                
              
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
