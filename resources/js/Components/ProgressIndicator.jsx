import React from 'react';
import ProgressBar from './ProgressBar';

const ProgressIndicator = ({ steps }) => (
    <div className="flex items-center justify-center gap-x-0">
        {steps.map((step, index) => (
            <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                    <div className={`bg-${step.isActive ? 'secondary500' : '[#EFF0F6]'} text-${step.isActive ? 'white' : '[#6F6C90]'} p-2 rounded-full text-lg flex items-center justify-center w-10 h-10`}>
                        {step.number}
                    </div>
                </div>
                {index < steps.length - 1 && (
                    <div className="w-1/4 px-3">
                        <ProgressBar progress={step.progress} />
                    </div>
                )}
            </React.Fragment>
        ))}
    </div>
);

export default ProgressIndicator;
