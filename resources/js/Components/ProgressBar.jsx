import React from 'react';
import { Progress } from 'flowbite-react';

const ProgressBar = ({ progress }) => (
    <Progress progress={progress} size="sm" color="yellow" />
);

export default ProgressBar;
