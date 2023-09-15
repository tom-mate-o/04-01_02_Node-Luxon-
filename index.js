// Aufgabe 04-01
// setInterval(() => {
//     console.log(new Date());
// }, 2000);

// Aufgabe 04-02 Luxon
const { DateTime } = require('luxon');

const dt = DateTime.now();


// Versuche mit Hilfe der Dokumentation das Datum in folgendem Format auszugeben: 28. März 2022, 15:31
const dtformat = dt.toLocaleString(DateTime.DATETIME_MED);
console.log(dtformat);

//Sprache auf Französich
const dtfrench = DateTime.now().setLocale('fr').toFormat("cccc, dd. MMMM yyyy, HH:mm");
console.log(dtfrench);

//Sprache auf Deutsch
const dtgerman = DateTime.now().setLocale('de').toFormat("cccc, dd. MMMM yyyy, HH:mm");
console.log(dtgerman);

//Beliebige Zeit
const dtany = DateTime.fromISO('2021-03-28T15:31:00').toString();
console.log(dtany);

// toRelative()
const oldDate = DateTime.fromISO('2019-03-28T15:31:00');
const newDate = DateTime.now();
const dateDiff = (newDate - oldDate);
const dtrelative = DateTime.now().minus(dateDiff).toRelative();
console.log(dtrelative);