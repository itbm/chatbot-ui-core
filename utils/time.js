"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimestampWithTimezoneOffset = void 0;
const date_fns_1 = require("date-fns");
// Function to get timestamp with Timezone Offset
function getTimestampWithTimezoneOffset() {
    // Get current date
    const currentDate = new Date();
    // Get timezone offset in minutes
    const timezoneOffset = currentDate.getTimezoneOffset();
    // Convert timezone offset from minutes to milliseconds
    const offsetInMilliseconds = timezoneOffset * 60 * 1000;
    // Subtract the offset in milliseconds to get the UTC date
    const utcDate = new Date(currentDate.getTime() - offsetInMilliseconds);
    // Format date to include timezone offset
    const timestampWithOffset = (0, date_fns_1.format)(utcDate, "yyyy-MM-dd'T'HH:mm:ssXXX");
    return timestampWithOffset;
}
exports.getTimestampWithTimezoneOffset = getTimestampWithTimezoneOffset;
