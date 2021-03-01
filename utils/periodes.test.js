
const {getMonthPeriode, getPeriodeFromDates, isAvailableOnPeriod} = require("./periodes");


describe('Periodes utils test', () => {

  test('Methods exists', () => {
    expect(getMonthPeriode).toBeDefined();
  });

  describe('Test getMonthPeriode', () => {
    test('Current year January', () => {
      const month = getMonthPeriode('January');
      expect(month.from.format('MM')).toBe('01');
      expect(month.to.format('MM')).toBe('01');
    });

    test('Year 2020', () => {
      const month = getMonthPeriode('March', 2020);
      expect(month.from.format('MM')).toBe('03');
      expect(month.to.format('MM')).toBe('03');
    });

    test('Year 2020 December', () => {
      const month = getMonthPeriode('December', 2020);
      expect(month.from.format('MM')).toBe('12');
      expect(month.to.format('MM')).toBe('12');
    });
  });

  describe('Test getPeriodeFromDates', () => {
    
    test('8 - 12 Mars', () => {
      const periode = getPeriodeFromDates("2021-03-08", "2021-03-12");
      expect(periode.from.format('YYYY')).toBe("2021");
      expect(periode.to.format('YYYY')).toBe("2021");
      expect(periode.from.format('MM')).toBe("03");
      expect(periode.to.format('MM')).toBe("03");
      expect(periode.from.format('DD')).toBe("08");
      expect(periode.to.format('DD')).toBe("12");
    });

  });

  describe('Test isAvailableOnPeriod', () => {

    test('8 - 12 Mars 2021 pour le mois de Mars 2021', () => {
      const month = getMonthPeriode('March', 2021);
      const periode = getPeriodeFromDates("2021-03-08", "2021-03-12");
      const result = isAvailableOnPeriod(month, periode);
      expect(result).toBe(true);
    });

    test('22 Février - 02 Mars 2021 pour le mois de Mars 2021', () => {
      const month = getMonthPeriode('March', 2021);
      const periode = getPeriodeFromDates("2021-02-22", "2021-03-02");
      const result = isAvailableOnPeriod(month, periode);
      expect(result).toBe(true);
    });

    test('28 Mars - 04 Avril 2021 pour le mois de Mars 2021', () => {
      const month = getMonthPeriode('March', 2021);
      const periode = getPeriodeFromDates("2021-03-28", "2021-04-04");
      const result = isAvailableOnPeriod(month, periode);
      expect(result).toBe(true);
    });

    test('02 Janvier - 09 Janvier 2020 pour le mois de Mars', () => {
      const month = getMonthPeriode('March', 2020);
      const periode = getPeriodeFromDates("2020-01-02", "2020-01-09");
      const result = isAvailableOnPeriod(month, periode);
      expect(result).toBe(false);
    });
  });
});