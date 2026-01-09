import React from "react";

export interface LoadingIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color: 'dark' | 'primary';
}