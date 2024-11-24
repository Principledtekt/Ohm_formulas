document.querySelectorAll('.radio').forEach(e => { e.addEventListener('change', ohmlaw) });

function ohmlaw() {
    let U = Number(document.getElementById('voltage').value);
    let I = Number(document.getElementById('current').value);
    let R = Number(document.getElementById('resistance').value);
    let P = Number(document.getElementById('power').value);
    let cosfi = Number(document.getElementById('cosfi').value);
    let formula_c = document.querySelector('input[name="x"]:checked');
    let idp = document.querySelector('#P');
    let idu = document.querySelector('#U');
    let idi = document.querySelector('#I');
    let idr = document.querySelector('#R');
    let idfi = document.querySelector('#fi');

    // console.log(formula);


    let formula = formula_c.value;

    // console.log(U, I, R, P, cosfi, formula)
    switch (formula) {
        //voltage
        case 'URI': {
            // document.querySelectorAll('.f').forEach(e => { e.removeAttribute('style') });
            U = I * R;
            document.getElementById('voltage').value = parseFloat(U.toFixed(5));
            document.getElementById('U1').style.backgroundColor = '#006868';
            idu.style.backgroundColor = '#00ff40';
            calcU = document.querySelectorAll('#current, #resistance');
            calcU.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('URI');
            break;
        }

        case 'UPI': {
            U = P / I;
            document.getElementById('voltage').value = parseFloat(U.toFixed(5));
            document.getElementById('U2').style.backgroundColor = '#006868';
            idu.style.backgroundColor = '#00ff40';
            calcU = document.querySelectorAll('#current, #power');
            calcU.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('UPI');
            break;
        }


        case 'UPR': {
            U = Math.sqrt(P * R);
            document.getElementById('voltage').value = parseFloat(U.toFixed(5));
            document.getElementById('U3').style.backgroundColor = '#006868';
            idu.style.backgroundColor = '#00ff40';
            calcU = document.querySelectorAll('#resistance, #power');
            calcU.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('UPR');
            break;
        }


        case 'UPIcos': {
            U = P / I * cosfi;
            document.getElementById('voltage').value = parseFloat(U.toFixed(5));
            document.getElementById('U4').style.backgroundColor = '#006868';
            idu.style.backgroundColor = '#00ff40';
            calcU = document.querySelectorAll('#current, #power, #cosfi');
            calcU.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('UPIcos');
            break;
        }



        //Amperage
        case 'IUR': {
            I = U / R;
            document.getElementById('current').value = I;
            document.getElementById('I1').style.backgroundColor = '#006868';
            idi.style.backgroundColor = '#00ff40';
            calcI = document.querySelectorAll('#voltage, #resistance');
            calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('IUR');
            break;
        }

        case 'IPU': {
            I = P / U;
            document.getElementById('current').value = I;
            document.getElementById('I2').style.backgroundColor = '#006868';
            idi.style.backgroundColor = '#00ff40';
            calcI = document.querySelectorAll('#voltage, #power');
            calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('IPU');
            break;
        }


        case 'IPR': {
            I = Math.sqrt(P / R);
            document.getElementById('current').value = I;
            document.getElementById('I3').style.backgroundColor = '#006868';
            idi.style.backgroundColor = '#00ff40';
            calcI = document.querySelectorAll('#resistance #power');
            calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('IPR');
            break;
        }


        case 'IPUcos': {
            I = P / (U * cosfi);
            document.getElementById('current').value = I;
            document.getElementById('I4').style.backgroundColor = '#006868';
            idi.style.backgroundColor = '#00ff40';
            calcI = document.querySelectorAll('#voltage, #power, #cosfi');
            calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('IPUcos');
            break;
        }



        //Resistence
        case 'RUI': {
            R = U / I;
            document.getElementById('resistance').value = R;
            document.getElementById('R1').style.backgroundColor = '#006868';
            idr.style.backgroundColor = '#00ff40';
            calcI = document.querySelectorAll('#voltage, #current');
            calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('RUI');
            break;
        }


        case 'RPI': {
            R = P / Math.pow(I, 2);
            document.getElementById('resistance').value = R;
            document.getElementById('R2').style.backgroundColor = '#006868';
            idr.style.backgroundColor = '#00ff40';
            calcI = document.querySelectorAll('#power, #current');
            calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('RPI');
            break;
        }


        case 'RUP': {
            R = Math.pow(U, 2) / P;
            document.getElementById('resistance').value = R;
            document.getElementById('R3').style.backgroundColor = '#006868';
            idr.style.backgroundColor = '#00ff40';
            calcI = document.querySelectorAll('#voltage, #power');
            calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('RUP');
            break;
        }



        //Power
        case 'PUI': {
            P = U * I;
            document.getElementById('power').value = P;
            document.getElementById('P1').style.backgroundColor = '#006868';
            idp.style.backgroundColor = '#00ff40';
            calcI = document.querySelectorAll('#voltage, #current');
            calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('PUI');
            break;
        }


        case 'PIR': {
            P = Math.pow(I, 2) * R;
            document.getElementById('power').value = P;
            document.getElementById('P2').style.backgroundColor = '#006868';
            idp.style.backgroundColor = '#00ff40';
            calcI = document.querySelectorAll('#current, #resistance');
            calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('PIR');
            break;
        }


        case 'PUR': {
            P = Math.pow(U, 2) / R;
            document.getElementById('power').value = P;
            document.getElementById('P3').style.backgroundColor = '#006868';
            idp.style.backgroundColor = '#00ff40';
            calcI = document.querySelectorAll('#voltage, #resistance');
            calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('PUR');
            break;
        }

        case 'PIUcos': {
            P = I * U * cosfi;
            document.getElementById('power').value = P;
            document.getElementById('P4').style.backgroundColor = '#006868';
            idp.style.backgroundColor = '#00ff40';
            calcI = document.querySelectorAll('#voltage, #current, #power, #cosfi');
            calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
            // console.log('PIUcos');
            break;
        }



        case null: {
            alert('formula not selected');
        
        }
    }
    // udalenije podsvetk formuly
    if (formula !== 'URI') { document.getElementById('U1').removeAttribute('style') };
    if (formula !== 'UPI') { document.getElementById('U2').removeAttribute('style') };
    if (formula !== 'UPR') { document.getElementById('U3').removeAttribute('style') };
    if (formula !== 'UPIcos') { document.getElementById('U4').removeAttribute('style') };

    if (formula !== 'IUR') { document.getElementById('I1').removeAttribute('style') };
    if (formula !== 'IPU') { document.getElementById('I2').removeAttribute('style') };
    if (formula !== 'IPR') { document.getElementById('I3').removeAttribute('style') };
    if (formula !== 'IPUcos') { document.getElementById('I4').removeAttribute('style') };

    if (formula !== 'RUI') { document.getElementById('R1').removeAttribute('style') };
    if (formula !== 'RPI') { document.getElementById('R2').removeAttribute('style') };
    if (formula !== 'RUP') { document.getElementById('R3').removeAttribute('style') };

    if (formula !== 'PUI') { document.getElementById('P1').removeAttribute('style') };
    if (formula !== 'PIR') { document.getElementById('P2').removeAttribute('style') };
    if (formula !== 'PUR') { document.getElementById('P3').removeAttribute('style') };
    if (formula !== 'PIUcos') { document.getElementById('P4').removeAttribute('style') };

    // udalen. podsv. label input
    if (formula !== 'URI' && formula !== 'UPI' && formula !== 'UPR' && formula !== 'UPIcos') { document.getElementById('U').removeAttribute('style') };
    if (formula !== 'IUR' && formula !== 'IPU' && formula !== 'IPR' && formula !== 'IPUcos') { document.getElementById('I').removeAttribute('style') };
    if (formula !== 'RUI' && formula !== 'RPI' && formula !== 'RUP') { document.getElementById('R').removeAttribute('style') };
    if (formula !== 'PUI' && formula !== 'PIR' && formula !== 'PUR' && formula !== 'PIUcos') {
        document.getElementById('P').removeAttribute('style')
    };
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
