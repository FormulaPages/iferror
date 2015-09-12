
import ISERROR from 'formula-iserror';

export default function IFERROR(value, valueIfError) {
    if (ISERROR(value)) {
        return valueIfError;
    }
    return value;
};
