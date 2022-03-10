describe('calculateMonthlyPayments() tests', function () {

  it('should calculate the monthly rate correctly', function () {
    const value = {
      amount: 1000,
      years: 1,
      rate: .1
    }
    expect(parseFloat((calculateMonthlyPayment(value)))).toEqual(87.92);
    expect(value.rate / 12).toBeCloseTo(.008333, 5);
  });


  it("should return a result with 2 decimal places", function () {
    const value = {
      amount: 1540,
      years: 1,
      rate: .116459819615
    }
    let monthlyPayment = calculateMonthlyPayment(value);

    expect(monthlyPayment % 1).not.toBe(0)
    let i = monthlyPayment.indexOf(".");
    let dec = monthlyPayment.substring(i + 1);

    expect(dec.length).toBeLessThanOrEqual(2)
  });
})
