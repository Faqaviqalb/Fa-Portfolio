import React from 'react'

function skill({name,percentage}) {
  return (
    <div className="skill">
        <div className='skill-header'>
        <span>{name}</span>
        <span>{percentage}</span>
        </div>
        <div className="progress-bars">
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow={{percentage}} aria-valuemin="0" aria-valuemax="100" style={{width: percentage}}></div></div>
        </div>         
    </div>
  )
}

export default skill
