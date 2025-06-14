function calculateDose() {
  const carbs = parseFloat(document.getElementById('carbs').value);
  const current = parseFloat(document.getElementById('current').value);
  const target = parseFloat(document.getElementById('target').value);
  const isf = parseFloat(document.getElementById('isf').value);
  const icr = parseFloat(document.getElementById('icr').value);

  const carbDose = carbs / icr;
  const correctionDose = (current - target) / isf;
  const total = carbDose + correctionDose;

  document.getElementById('result').innerText =
    'الجرعة التقريبية: ' + total.toFixed(1) + ' وحدات';
}
