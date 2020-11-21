/**
 * @file functionReverse.js is the 
 * @author Navel
 * @see <a href="http://localhost">dd</a>
 */

/**
 * return days of week inverted
 * @param {integer} option - especifica si devolvemos dias de samana o de fin de samena
 * @returns {string} - Days
 */
const days = (option) => {

    const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const weekend = ['Saturday', 'Sunday'];

    return (option == 1) ? `Work Days: ${workDays.reverse()}` : `Weekend Days: ${weekend.reverse()}`;
};

console.log(days(1))