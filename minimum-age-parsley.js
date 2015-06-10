//     Minimum-age-parsley.js 1.0.0
//     http://roylodder.com
//     (c) 2015 Roy Lodder
//     Minimum-age-parsley.js may be freely distributed under the MIT license.

window.ParsleyValidator
    .addValidator('minimumage', function (value, requirement) {

    function isLeapYear(year) {
        var d = new Date(year, 1, 28);
        d.setDate(d.getDate() + 1);
        return d.getMonth() == 1;
    }

    function getAge(date) {
        var d = new Date(date),
            now = new Date();
        var years = now.getFullYear() - d.getFullYear();
        d.setFullYear(d.getFullYear() + years);
        if (d > now) {
            years--;
            d.setFullYear(d.getFullYear() - 1);
        }
        var days = (now.getTime() - d.getTime()) / (3600 * 24 * 1000);
        return years + days / (isLeapYear(now.getFullYear()) ? 366 : 365);
    }

    age = Math.floor(getAge(value))

    return age >= requirement;


    }, 32)
    .addMessage('en', 'minimumage', 'We see that you\'re not %s yet.')
    .addMessage('nl', 'minimumage', 'We zien dat je nog geen %s bent.');