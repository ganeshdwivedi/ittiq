import React from 'react'

const EclippseSVG = ({ className }) => {
    return (
        <div className={`${className} absolute`}><svg width="451" height="1286" viewBox="0 0 451 1286" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_566)">
                <ellipse cx="-283" cy="643" rx="480" ry="389" fill="#FF7426" fill-opacity="0.1" />
            </g>
            <defs>
                <filter id="filter0_f_1_566" x="-1017" y="0" width="1468" height="1286" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="127" result="effect1_foregroundBlur_1_566" />
                </filter>
            </defs>
        </svg>
        </div>
    )
}

export default EclippseSVG