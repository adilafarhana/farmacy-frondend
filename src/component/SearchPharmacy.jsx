import React from 'react'
import NavPharmacy from './NavPharmacy'

const SearchPharmacy = () => {
  return (
    <div>
        <NavPharmacy/>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12-col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">pharmacyname</label>
                            <input type="text" className="form-control" /><br></br>
                        </div>
                        <div className="col col-12-col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary">SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPharmacy