import * as guard from "../../src/commons/guard";

describe("Testing Guard common functions", () => {
  test("Check Null and Undefined", () => {
    expect(() => guard.argumentNotNull(null)).toThrowError();
    expect(() => guard.argumentNotNull(undefined)).toThrowError();

    expect(() => guard.argumentNotNull("")).not.toThrowError();
    expect(() => guard.argumentNotNull("Duy")).not.toThrowError();
  });

  test("Check Empty", () => {
    expect(() => guard.argumentNotEmpty(null)).toThrowError();
    expect(() => guard.argumentNotEmpty(undefined)).toThrowError();
    expect(() => guard.argumentNotEmpty("")).toThrowError();

    expect(() => guard.argumentNotEmpty("Duy")).not.toThrowError();
  });

  test("Check Function", () => {
    expect(() => guard.argumentIsFunc(null)).toThrowError();
    expect(() => guard.argumentIsFunc(undefined)).toThrowError();
    expect(() => guard.argumentIsFunc("")).toThrowError();

    expect(() => guard.argumentIsFunc(() => {})).not.toThrowError();
  });

  test("Check String", () => {
    expect(() => guard.argumentIsString(null)).toThrowError();
    expect(() => guard.argumentIsString(undefined)).toThrowError();
    expect(() => guard.argumentIsString(123)).toThrowError();
    expect(() => guard.argumentIsString(true)).toThrowError();

    expect(() => guard.argumentIsString("")).not.toThrowError();
    expect(() => guard.argumentIsString("Duy")).not.toThrowError();
  });
});
