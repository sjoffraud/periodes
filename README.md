# periodes

Install : "npm i"

Tests : "npm test"

Usage : index.js -m [month] -s [date] -e [date]

Options :
      --help     Affiche l'aide                                        [booléen]
      --version  Affiche le numéro de version                          [booléen]
  -y, --year
  -m, --month                                                           [requis]
  -s, --start                                                           [requis]
  -e, --end                                                             [requis]

Exemples :
  index.js -m march [-y 2021] -s            verifier si la période du 08/03/2021
  2021-03-08 -e 2021-03-12                  au 12/03/2021 est comprise dans le
                                            mois de Mars