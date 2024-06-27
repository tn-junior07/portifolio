import React from 'react';
import PropTypes from 'prop-types';

const H2SvgIcon = ({
    width = 61,
    height = 20,
    rectWidth = 54,
    rectHeight = 4,
    rectColor = "#00AD6F",
    rectOpacity = 0.58,
    spacing = 8
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width={rectWidth}
                height={rectHeight}
                rx="2"
                fill={rectColor}
                fillOpacity={rectOpacity}
            />
            <rect
                y={height - rectHeight}
                width={rectWidth}
                height={rectHeight}
                rx="2"
                fill={rectColor}
                fillOpacity={rectOpacity}
            />
            <rect
                x={spacing}
                y={(height - rectHeight) / 2}
                width={rectWidth}
                height={rectHeight}
                rx="2"
                fill={rectColor}
                fillOpacity={rectOpacity}
            />
        </svg>
    );
};

H2SvgIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    rectWidth: PropTypes.number,
    rectHeight: PropTypes.number,
    rectColor: PropTypes.string,
    rectOpacity: PropTypes.number,
    spacing: PropTypes.number
};

export default H2SvgIcon;
