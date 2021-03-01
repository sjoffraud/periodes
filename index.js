#!/usr/bin/env node
const argv = require('yargs/yargs')(process.argv.slice(2))
.usage('Usage: $0 -m [month] -s [date] -e [date]')
.example('$0 -m march [-y 2021] -s 2021-03-08 -e 2021-03-12', 'verifier si la période du 08/03/2021 au 12/03/2021 est comprise dans le mois de Mars')
.demandOption(['m','s','e'])
.option("y")
.alias('m', 'month')
.alias('y', 'year')
.alias('s', 'start')
.alias('e', 'end')
.argv;

const {getMonthPeriode, getPeriodeFromDates, isAvailableOnPeriod} = require('./utils/periodes');

const month = getMonthPeriode(argv.month, argv.year);
const periode = getPeriodeFromDates(argv.start, argv.end);
const result = isAvailableOnPeriod(month, periode);

if(result){
  console.log(`La periode du ${periode.from.format('DD/MM/YYYY')} au ${periode.to.format('DD/MM/YYYY')} doit être prise en compte pour le calcul du bulletin correspondant.`);
}else{
  console.log(`La periode du ${periode.from.format('DD/MM/YYYY')} au ${periode.to.format('DD/MM/YYYY')} ne doit pas être prise en compte pour le calcul du bulletin correspondant.`);
}

