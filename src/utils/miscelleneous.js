export function validateObjectValues(obj, requiredKeys = []) {
    const errors = [];

    for (const key of requiredKeys) {
        const value = obj[key];

        if (value === undefined || value === null || value === '') {
            errors.push(`The value for "${key}" is invalid.`);
        }
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}

