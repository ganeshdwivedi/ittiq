import React from 'react'

const RectangleSVG = ({ className }) => {
    return (
        <div className={`${className} absolute z-40`}><svg width="700" height="868" viewBox="0 0 700 868" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="704" height="868" transform="matrix(-1 0 0 1 700 0)" fill="url(#paint0_linear_1_714)" />
            <defs>
                <linearGradient id="paint0_linear_1_714" x1="704" y1="364.846" x2="-338.215" y2="354.298" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="0.515427" stop-color="#D9D9D9" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
        </div>
    )
}

export default RectangleSVG