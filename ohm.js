document.querySelectorAll('.radio').forEach(e => { e.addEventListener('change', ohmlaw) });

function ohmlaw() {
    let U = Number(document.getElementById('voltage').value);
    let I = Number(document.getElementById('current').value);
    let R = Number(document.getElementById('resistance').value);
    let P = Number(document.getElementById('power').value);
    let cosfi = Number(document.getElementById('cosfi').value);
    let formula = document.querySelector('input[name="x"]:checked');
    let idp = document.querySelector('#P');
    let idu = document.querySelector('#U');
    let idi = document.querySelector('#I');
    let idr = document.querySelector('#R');
    let idfi = document.querySelector('#fi');

    // console.log();

    if (formula == null) {
        alert('formula not selected');
        return
    }
    formula = formula.value;

    // console.log(U, I, R, P, cosfi, formula)
    //voltage
    if (formula == 'URI') {
        U = I * R;
        document.getElementById('voltage').value = U;
        document.getElementById('U1').style.backgroundColor = '#006868';
        idu.style.backgroundColor = '#00ff40';
        calcU = document.querySelectorAll('#current, #resistance');
        calcU.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('URI');
    }
    if (formula !== 'URI') { document.getElementById('U1').removeAttribute('style') };

    if (formula == 'UPI') {
        U = P / I;
        document.getElementById('voltage').value = U;
        document.getElementById('U2').style.backgroundColor = '#006868';
        idu.style.backgroundColor = '#00ff40';
        calcU = document.querySelectorAll('#current, #power');
        calcU.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('UPI');
    }
    if (formula !== 'UPI') { document.getElementById('U2').removeAttribute('style') };

    if (formula == 'UPR') {
        U = Math.sqrt(P * R);
        document.getElementById('voltage').value = U;
        document.getElementById('U3').style.backgroundColor = '#006868';
        idu.style.backgroundColor = '#00ff40';
        calcU = document.querySelectorAll('#resistance, #power');
        calcU.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('UPR');
    }
    if (formula !== 'UPR') { document.getElementById('U3').removeAttribute('style') };

    if (formula == 'UPIcos') {
        U = P / I * cosfi;
        document.getElementById('voltage').value = U;
        document.getElementById('U4').style.backgroundColor = '#006868';
        idu.style.backgroundColor = '#00ff40';
        calcU = document.querySelectorAll('#current, #power, #cosfi');
        calcU.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('UPIcos');
    }
    if (formula !== 'UPIcos') { document.getElementById('U4').removeAttribute('style') };

    if (formula !== 'URI' && formula !== 'UPI' && formula !== 'UPR' && formula !== 'UPIcos') { document.getElementById('U').removeAttribute('style') };
    //Amperage
    if (formula == 'IUR') {
        I = U / R;
        document.getElementById('current').value = I;
        document.getElementById('I1').style.backgroundColor = '#006868';
        idi.style.backgroundColor = '#00ff40';
        calcI = document.querySelectorAll('#voltage, #resistance');
        calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('IUR');
    }
    if (formula !== 'IUR') { document.getElementById('I1').removeAttribute('style') };

    if (formula == 'IPU') {
        I = P / U;
        document.getElementById('current').value = I;
        document.getElementById('I2').style.backgroundColor = '#006868';
        idi.style.backgroundColor = '#00ff40';
        calcI = document.querySelectorAll('#voltage, #power');
        calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('IPU');
    }
    if (formula !== 'IPU') { document.getElementById('I2').removeAttribute('style') };

    if (formula == 'IPR') {
        I = Math.sqrt(P / R);
        document.getElementById('current').value = I;
        document.getElementById('I3').style.backgroundColor = '#006868';
        idi.style.backgroundColor = '#00ff40';
        calcI = document.querySelectorAll('#resistance #power');
        calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('IPR');
    }
    if (formula !== 'IPR') { document.getElementById('I3').removeAttribute('style') };

    if (formula == 'IPUcos') {
        I = P / (U * cosfi);
        document.getElementById('current').value = I;
        document.getElementById('I4').style.backgroundColor = '#006868';
        idi.style.backgroundColor = '#00ff40';
        calcI = document.querySelectorAll('#voltage, #power, #cosfi');
        calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('IPUcos');
    }
    if (formula !== 'IPUcos') { document.getElementById('I4').removeAttribute('style') };
    if (formula !== 'IUR' && formula !== 'IPU' && formula !== 'IPR' && formula !== 'IPUcos') { document.getElementById('I').removeAttribute('style') };

    //Resistence
    if (formula == 'RUI') {
        R = U / I;
        document.getElementById('resistance').value = R;
        document.getElementById('R1').style.backgroundColor = '#006868';
        idr.style.backgroundColor = '#00ff40';
        calcI = document.querySelectorAll('#voltage, #current');
        calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('RUI');
    }
    if (formula !== 'RUI') { document.getElementById('R1').removeAttribute('style') };

    if (formula == 'RPI') {
        R = P / Math.pow(I, 2);
        document.getElementById('resistance').value = R;
        document.getElementById('R2').style.backgroundColor = '#006868';
        idr.style.backgroundColor = '#00ff40';
        calcI = document.querySelectorAll('#power, #current');
        calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('RPI');
    }
    if (formula !== 'RPI') { document.getElementById('R2').removeAttribute('style') };

    if (formula == 'RUP') {
        R = Math.pow(U, 2) / P;
        document.getElementById('resistance').value = R;
        document.getElementById('R3').style.backgroundColor = '#006868';
        idr.style.backgroundColor = '#00ff40';
        calcI = document.querySelectorAll('#voltage, #power');
        calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('RUP');
    }
    if (formula !== 'RUP') { document.getElementById('R3').removeAttribute('style') };
    if (formula !== 'RUI' && formula !== 'RPI' && formula !== 'RUP') { document.getElementById('R').removeAttribute('style') };

    //Power
    if (formula == 'PUI') {
        P = U * I;
        document.getElementById('power').value = P;
        document.getElementById('P1').style.backgroundColor = '#006868';
        idp.style.backgroundColor = '#00ff40';
        calcI = document.querySelectorAll('#voltage, #current');
        calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('PUI');
    }
    if (formula !== 'PUI') { document.getElementById('P1').removeAttribute('style') };

    if (formula == 'PIR') {
        P = Math.pow(I, 2) * R;
        document.getElementById('power').value = P;
        document.getElementById('P2').style.backgroundColor = '#006868';
        idp.style.backgroundColor = '#00ff40';
        calcI = document.querySelectorAll('#current, #resistance');
        calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('PIR');
    }
    if (formula !== 'PIR') { document.getElementById('P2').removeAttribute('style') };

    if (formula == 'PUR') {
        P = Math.pow(U, 2) / R;
        document.getElementById('power').value = P;
        document.getElementById('P3').style.backgroundColor = '#006868';
        idp.style.backgroundColor = '#00ff40';
        calcI = document.querySelectorAll('#voltage, #resistance');
        calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('PUR');
    }
    if (formula !== 'PUR') { document.getElementById('P3').removeAttribute('style') };

    if (formula == 'PIUcos') {
        P = I * U * cosfi;
        document.getElementById('power').value = P;
        document.getElementById('P4').style.backgroundColor = '#006868';
        idp.style.backgroundColor = '#00ff40';
        calcI = document.querySelectorAll('#voltage, #current, #power, #cosfi');
        calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
        // console.log('PIUcos');
    }
    if (formula !== 'PIUcos') { document.getElementById('P4').removeAttribute('style') };
    if (formula !== 'PUI' && formula !== 'PIR' && formula !== 'PUR' && formula !== 'PIUcos') { 
        document.getElementById('P').removeAttribute('style') };
}

// console.log();

function checkcosfi() {
    if (document.getElementById('check-cosfi').checked == true) {
        fi = document.querySelectorAll('.cosfi-tr');
        fi.forEach(e => { e.hidden = false });
    }
    else {
        fi.forEach(e => { e.hidden = true });
    }
}