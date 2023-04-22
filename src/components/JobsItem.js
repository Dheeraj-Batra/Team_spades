import React, { Component } from 'react'

export class JobsItem extends Component {
    render() {
        let {title, eligibility,newsUrl,jobprofile,daysleft} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Eligibility:{eligibility}</p>
                        <p className="card-text">Job Profile:{jobprofile}</p>
                        <p className="card-text">Days Left:{daysleft}</p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Apply New</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default JobsItem