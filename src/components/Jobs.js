import React, { Component } from 'react'
import JobsItem from './JobsItem'

export class Jobs extends Component {
  articles = [
    {
      "title": "Airbus Aerothon 5.0",
      "eligibility": "experience from 0 to 10+years",
      "jobprofile": "coding",
      "url": "https://www.hackerearth.com/challenges/new/competitive/airbus-aerothon-50/",
      "daysleft": "11-days ",
    },
    {
      "title": "American Express Makeathon",
      "eligibility": "2024/2025 Women only",
      "jobprofile": "coding",
      "url": "https://www.hackerearth.com/challenges/hackathon/american-express-makeathon-2023/",
      "daysleft": "2-days",
    },
    {
      "title": "Subtlerr Technologies hiring Software Engineer Intern ",
      "eligibility": " For Batch: 2024/ 2025",
      "jobprofile": "Software Engineer ",
      "url": "https://www.linkedin.com/jobs/view/3493577450",
      "daysleft": "3-days",
    },
    {
      "title": "Accomodation intern",
      "eligibility": "Excellent proficiency in Microsoft Office (Excel, PowerPoint, etc) & Google Workspace (Docs, Sheets, etc)",
      "jobprofile": "analyst",
      "url": "https://careers.tiket.com/jobs/accommodation-homes-intern/256a2557-f370-461a-a0dc-0b7551c9753f",
      "daysleft": "8-days",
    },
    {
      "title": "Accounting - B2B & Partnership Sr Supervisor",
      "eligibility": "Responsible for recording the Accrual Journal in accordance with the provisions applicable",
      "jobprofile": "Finance & Accounting",
      "url": "https://careers.tiket.com/jobs/accounting-b2b-partnership-sr-supervisor/f8871a0c-adde-47bd-88cf-7287df1c3887",
      "daysleft": "10-days"
    },
    {
        "title": "Accounting Revenue & Refund Staff",
        "eligibility":"Bachelor Degree in Accounting",
        "jobprofile":"Finance & Accounting",
        "url": "https://careers.tiket.com/jobs/accounting-revenue-refund-staff/f8653359-09a2-4f4b-9675-8eab98f9a9e0",
        "daysleft": "7-days",
    },
    {
        "title": "Backend Engineer",
        "eligibility":"Experience working with MongoDB, MySQL, and Postgre.",
        "jobprofile":"software",
        "url": "https://careers.tiket.com/jobs/backend-engineer/27191542-25f4-4be7-a884-198446ba9477",
        "daysleft": "6-days",
    },
    {
        "title": "Commercial Content Intern",
        "eligibility":"Majoring in Marketing, English literature, Journalism or related fields. Fresh graduates are welcomed ;)",
        "jobprofile":"Content Writing",
        "url": "https://careers.tiket.com/jobs/commercial-content-intern/c7c5849d-f7bd-4965-800c-3332cda30a55",
        "daysleft": "4-days",
    },
    {
        "title": "Content Creator (Writer/SEO) Intern",
        "eligibility":"Fresh graduate, Min D3 any major or final year students are also welcome to apply",
        "jobprofile":"Customer Expiernece",
        "url": "https://careers.tiket.com/jobs/content-creator-writerseo-intern/4246ee8c-7ffd-49af-8e75-ec52c1546cd0",
        "daysleft": "2-days",
    },
    {
        "title": "American Express Makeathon  ",
        "eligibility":"For Batch: 2024/2025 Women only",
      "jobprofile":"coding",
        "url": "https://www.hackerearth.com/challenges/hackathon/american-express-makeathon-2023/",
        "daysleft": "6-days",
    },
    {
        "title": "Engineering Manager ( Backend)",
        "eligibility":"Minimum 8 years working experience as Backend Engineer",
      "jobprofile":"software",
        "url": "https://careers.tiket.com/jobs/engineering-manager-backend/93132cf3-c1e8-4235-92c0-c489dd455391",
        "daysleft": "3-days",
    },
    { 
        "title": "Database Administrator",
        "eligibility":"Tech/B.E in Computer Science, IT, or similar field; a Master’s is a plus",
      "jobprofile":"Technology Infrastructure & Security",
        "url": "https://careers.tiket.com/jobs/database-administrator/0fa32413-65c5-43e5-b886-167df9354190",
        "daysleft": "10-days",
    }
  ]
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Jobs Available</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <JobsItem title={element.title} eligibility={element.eligibility} newsUrl={element.url}
                jobprofile={element.jobprofile} daysleft={element.daysleft} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default Jobs