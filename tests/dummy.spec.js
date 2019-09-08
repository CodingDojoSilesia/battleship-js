describe("A dummy test suite to show example tests", () => {
  it("when adding 2 + 2 then result should be 4", () => {
    expect(2 + 2).toBe(4);
  });

  it("When value is not null then should be not null", () => {
    const variable = 42;
    expect(variable).not.toBe(null);
  });

  it("When value is set then should contains substring", () => {
    const message = 'BattleShips';
    expect(message.toLowerCase()).toContain('ship');
  });
});

// More about some useful examples you can read
// here: https://jasmine.github.io/2.1/introduction
