function ParenthesisAndParameters() {
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <>
            <h3>Parenthesis and Parameters</h3>
            twoSquared = {twoSquared}<br />
            threePlusOne = {threePlusOne}<br />
        </>
    );
}

export default ParenthesisAndParameters;