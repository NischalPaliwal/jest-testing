const { sum, myFunction } = require("./sum");
const fetchData = require("./async");

test('adds two numbers a and b', () => {
    expect(sum(1, 2)).toBe(3);
});

test("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => {
    const n = null;
    expect(n).toBeFalsy();
});

test("zero is falsy", () => {
    const n = 0;
    expect(n).toBeFalsy();
});

test("one is truthy", () => {
    const n = 1;
    expect(n).toBeTruthy();
});

test('throws on invalid input', () => {
    expect(() => {
        myFunction('hello');
    }).toThrow();
});

test('data check', done  => {
    const callback = (data) => {
        try {
            expect(data).toBe("Hello World from Nischal Paliwal");
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
})