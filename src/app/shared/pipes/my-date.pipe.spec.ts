import {MyDatePipe} from "./my-date.pipe";

describe("MyDatePipe", () => {
  let pipe = null;

  it("create an instance", () => {

    expect(pipe).toBeTruthy();
  });

  it("should works", () => {
    const input = "Mon May 06 2019 10:14:44 GMT+0200 (czas środkowoeuropejski letni)";
    const output = pipe.transform(input);
    expect(output).toEqual("6 maja 2019, 10:14");
  });

  it("should return empty string for falsy values", () => {

    let output = pipe.transform(null);
    expect(output).toEqual("");

    output = pipe.transform(false);
    expect(output).toEqual("");

    output = pipe.transform(undefined);
    expect(output).toEqual("");

    output = pipe.transform(0);
    expect(output).toEqual("");

    output = pipe.transform(NaN);
    expect(output).toEqual("");

    output = pipe.transform("");
    expect(output).toEqual("");

  });

  it("should return empty string for non date-strings", () => {
    const input = "AAABBCCC";
    const output = pipe.transform(input);
    expect(output).toEqual("");
  });

  beforeEach(() => {
    pipe = new MyDatePipe();
  });

});
