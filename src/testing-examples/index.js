export const getPropertyWithDefault = (propertyName, defaultValue, obj) => {
    return obj[propertyName] || defaultValue;
};
