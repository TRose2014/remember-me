import React from 'react';

function ResourcePage() {
  return (
    <>
      <h1 className="resourceHeader">Resource Page</h1>
      <div className="resourceContainer">
        <ul className="resource">
          <li>
            <a href="https://blacklivesmatter.com/" target="_blank" rel="noopener noreferrer">Black Lives Matter</a>
          </li>
          <li>
            <a href="https://www.nlg-npap.org/" target="_blank" rel="noopener noreferrer">National Police Accountability Project</a>
          </li>
          <li>
            <a href="https://www.tolerance.org/" target="_blank" rel="noopener noreferrer">Teaching Tolerance</a>
          </li>
          <li>
            <a href="https://www.rockthevote.org/" target="_blank" rel="noopener noreferrer">Rock the Vote</a>
          </li>
          <li>
            <a href="https://www.joincampaignzero.org" target="_blank" rel="noopener noreferrer">Campaign Zero</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ResourcePage;