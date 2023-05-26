import React from 'react';

const SwapIcon = ({ color = '#A2A2A8' }) => {
    return (
        <svg
            width='22px'
            height='22px'
            viewBox='0 0 21 21'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g
                fill='none'
                fillRule='evenodd'
                stroke={color}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                transform='matrix(0 1 -1 0 18.5 2.5)'
            >
                <g transform='matrix(0 -1 1 0 .5 16.5)'>
                    <path d='m16 0v5h-5' transform='matrix(0 1 1 0 11 -11)' />
                    <path d='m16 5c-2.8366699-3.33333333-5.6700033-5-8.5-5-2.82999674 0-5.32999674 1-7.5 3' />
                </g>
                <g transform='matrix(0 1 -1 0 14 1)'>
                    <path d='m16 0v5h-5' transform='matrix(0 1 1 0 11 -11)' />
                    <path d='m16 5c-2.8366699-3.33333333-5.6700033-5-8.5-5-2.82999674 0-5.32999674 1-7.5 3' />
                </g>
            </g>
        </svg>
    );
};

export default SwapIcon;
