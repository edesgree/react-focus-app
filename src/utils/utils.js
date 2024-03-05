export const getInputRangeBackgroundSize = (value, maxValue) => {
    return { backgroundSize: `${(value * 100) / maxValue}% 100%` };
};

