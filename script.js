document.getElementById('retirement-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const currentAge = parseInt(document.getElementById('current-age').value);
    const retirementAge = parseInt(document.getElementById('retirement-age').value);
    const currentIncome = parseFloat(document.getElementById('current-income').value);
    const desiredRetirementSavings = parseFloat(document.getElementById('desired-retirement-savings').value);
    const currentInvestments = parseFloat(document.getElementById('current-investments').value);

    const yearsToInvest = retirementAge - currentAge;
    const neededSavings = desiredRetirementSavings - currentInvestments;
    const annualReturn = neededSavings / (currentInvestments * yearsToInvest);
    const multiplicativeFactor = neededSavings / currentInvestments;

    document.getElementById('result').innerHTML = `
        <p>Annual Return Needed: ${(annualReturn * 100).toFixed(2)}%</p>
        <p>Multiplicative Factor: ${multiplicativeFactor.toFixed(2)}x</p>
    `;
});

function updateInput(val, outputId) {
    document.getElementById(outputId).textContent = val;
}
