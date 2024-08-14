// utils/helpers.js

module.exports = {
    // Add your helper functions here
    formatDate: (date) => {
      // Example function to format a date
      return new Intl.DateTimeFormat('en-US').format(date);
    },
  };
  