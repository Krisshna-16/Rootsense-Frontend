import React from "react";

export const VintageLogo = ({ className = "", width = 200, height = 200 }: { className?: string, width?: number, height?: number }) => {
    // Colors based on the requested palette
    const colors = {
        cream: "#faf8f3",
        sage: "#8da399", // Adjusted for visibility
        darkGreen: "#2d5016",
        gold: "#d4af37",
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 300"
            width={width}
            height={height}
            className={className}
        >
            {/* Definitions for text paths */}
            <defs>
                <path id="topCurve" d="M 30,150 A 70,110 0 0,1 170,150" />
                <path id="bottomCurve" d="M 30,150 A 70,110 0 0,0 170,150" />
            </defs>

            {/* Main Badge Shape - Vertical Oval */}
            <ellipse
                cx="100"
                cy="150"
                rx="90"
                ry="140"
                fill={colors.cream}
                stroke={colors.darkGreen}
                strokeWidth="4"
            />

            {/* Inner Decorative Line */}
            <ellipse
                cx="100"
                cy="150"
                rx="82"
                ry="132"
                fill="none"
                stroke={colors.darkGreen}
                strokeWidth="1"
                strokeDasharray="4 4"
            />

            {/* Central Pine Tree Illustration */}
            <g transform="translate(60, 100) scale(3.5)" fill={colors.darkGreen}>
                {/* Simplified Pine Tree Path */}
                <path d="M12 2L4 14h6v4H6l6 8 6-8h-4v-4h6L12 2z" />
                <rect x="11" y="24" width="2" height="6" />
            </g>

            {/* Top Text: ROOTSENSE */}
            <text fill={colors.darkGreen} fontSize="24" fontFamily="serif" fontWeight="bold" letterSpacing="4">
                <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
                    ROOTSENSE
                </textPath>
            </text>

            {/* Bottom Text: EST 2026 */}
            <text fill={colors.darkGreen} fontSize="18" fontFamily="serif" fontWeight="bold" letterSpacing="4">
                {/* @ts-ignore */}
                <textPath href="#bottomCurve" startOffset="50%" textAnchor="middle" side="right">
                    EST • 2026
                </textPath>
            </text>

            {/* Side Details - Horizontal Lines */}
            <line x1="25" y1="150" x2="55" y2="150" stroke={colors.darkGreen} strokeWidth="2" />
            <line x1="145" y1="150" x2="175" y2="150" stroke={colors.darkGreen} strokeWidth="2" />

        </svg>
    );
};
