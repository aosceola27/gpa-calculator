console.clear();

(() => {
  const rows = document.querySelectorAll('#coursesContainer .row');
  let uw = 0, w = 0, c = 0;

  rows.forEach(r => {
    const percentageText = r.querySelector('.col-md-2 h3')?.textContent.replace('%', '');
    const courseTypeText = r.querySelector('.col-md-3 h3')?.textContent || '';
    const percentage = parseFloat(percentageText);

    if (isNaN(percentage)) return;

    let gpaCP = 0, gpaHonors = 0, gpaAP = 0;

    if (percentage >= 97) [gpaCP, gpaHonors, gpaAP] = [4.3, 4.8, 5.3];
    else if (percentage >= 93) [gpaCP, gpaHonors, gpaAP] = [4.0, 4.5, 5.0];
    else if (percentage >= 90) [gpaCP, gpaHonors, gpaAP] = [3.7, 4.2, 4.7];
    else if (percentage >= 87) [gpaCP, gpaHonors, gpaAP] = [3.3, 3.8, 4.3];
    else if (percentage >= 83) [gpaCP, gpaHonors, gpaAP] = [3.0, 3.5, 4.0];
    else if (percentage >= 80) [gpaCP, gpaHonors, gpaAP] = [2.7, 3.2, 3.7];
    else if (percentage >= 77) [gpaCP, gpaHonors, gpaAP] = [2.3, 2.8, 3.3];
    else if (percentage >= 73) [gpaCP, gpaHonors, gpaAP] = [2.0, 2.5, 3.0];
    else if (percentage >= 70) [gpaCP, gpaHonors, gpaAP] = [1.7, 2.2, 2.7];
    else if (percentage >= 67) [gpaCP, gpaHonors, gpaAP] = [1.3, 1.8, 2.3];
    else if (percentage >= 63) [gpaCP, gpaHonors, gpaAP] = [1.0, 1.5, 2.0];
    else if (percentage >= 60) [gpaCP, gpaHonors, gpaAP] = [0.7, 1.2, 1.7];
    else [gpaCP, gpaHonors, gpaAP] = [0, 0, 0];

    let weighted = gpaCP;

    if (courseTypeText.includes('- H')) weighted = gpaHonors;
    else if (courseTypeText.includes('- AP')) weighted = gpaAP;

    uw += gpaCP;
    w += weighted;
    c += 1;
  });

  alert(`Unweighted GPA: ${(uw / c).toFixed(2)}\nWeighted GPA: ${(w / c).toFixed(2)}`);
})();
