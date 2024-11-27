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

    (async function () {
        await wasm_bindgen();
        // console.log(U, I, R, P, cosfi, formula)
        switch (formula) {
            //voltage
            case 'UIR': {
                const { u_ir } = wasm_bindgen;
                
                // U = I * R;
                document.getElementById('voltage').value = u_ir(I, R);
                
                idu.style.backgroundColor = '#03a5a5';
                calcU = document.querySelectorAll('#current, #resistance');
                calcU.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('UIR');
                // })()
                break;
            }

            case 'UPI': {
                // (async function () {
                const { u_pi } = wasm_bindgen;
                // await wasm_bindgen();
                // U = P / I;
                document.getElementById('voltage').value = u_pi(P, I);
                
                idu.style.backgroundColor = '#03a5a5';
                calcU = document.querySelectorAll('#current, #power');
                calcU.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('UPI');
                // })()
                break;
            }


            case 'UPR': {
                const { u_pr } = wasm_bindgen;
                // U = Math.sqrt(P * R);
                document.getElementById('voltage').value = u_pr(P, R);
                
                idu.style.backgroundColor = '#03a5a5';
                calcU = document.querySelectorAll('#resistance, #power');
                calcU.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('UPR');
                break;
            }


            case 'UPIcos': {
                const { u_picosfi } = wasm_bindgen;
                // U = P / (I * cosfi);
                document.getElementById('voltage').value = u_picosfi(P, I, cosfi);
                
                idu.style.backgroundColor = '#03a5a5';
                calcU = document.querySelectorAll('#current, #power, #cosfi');
                calcU.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('UPIcos');
                break;
            }



            //Amperage
            case 'IUR': {
                const { i_ur } = wasm_bindgen;
                // I = U / R;
                document.getElementById('current').value = i_ur(U, R);
                
                idi.style.backgroundColor = '#03a5a5';
                calcI = document.querySelectorAll('#voltage, #resistance');
                calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('IUR');
                break;
            }

            case 'IPU': {
                const { i_pu } = wasm_bindgen;
                // I = P / U;
                document.getElementById('current').value = i_pu(P, U);
                
                idi.style.backgroundColor = '#03a5a5';
                calcI = document.querySelectorAll('#voltage, #power');
                calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('IPU');
                break;
            }


            case 'IPR': {
                const { i_pr } = wasm_bindgen;
                // I = Math.sqrt(P / R);
                document.getElementById('current').value = i_pr(P, R);
                
                idi.style.backgroundColor = '#03a5a5';
                calcI = document.querySelectorAll('#resistance #power');
                calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('IPR');
                break;
            }


            case 'IPUcos': {
                const { i_pucosfi } = wasm_bindgen;
                // I = P / (U * cosfi);
                document.getElementById('current').value = i_pucosfi(P, U, cosfi);
                
                idi.style.backgroundColor = '#03a5a5';
                calcI = document.querySelectorAll('#voltage, #power, #cosfi');
                calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('IPUcos');
                break;
            }



            //Resistance
            case 'RUI': {
                const { r_ui } = wasm_bindgen;
                // R = U / I;
                document.getElementById('resistance').value = r_ui(U, I);
                
                idr.style.backgroundColor = '#03a5a5';
                calcI = document.querySelectorAll('#voltage, #current');
                calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('RUI');
                break;
            }


            case 'RPI': {
                const { r_pi } = wasm_bindgen;
                // R = P / Math.pow(I, 2);
                document.getElementById('resistance').value = r_pi(P, I);
               
                idr.style.backgroundColor = '#03a5a5';
                calcI = document.querySelectorAll('#power, #current');
                calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('RPI');
                break;
            }


            case 'RUP': {
                const { r_up } = wasm_bindgen;
                // R = Math.pow(U, 2) / P;
                document.getElementById('resistance').value = r_up(U, P);
                
                idr.style.backgroundColor = '#03a5a5';
                calcI = document.querySelectorAll('#voltage, #power');
                calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('RUP');
                break;
            }



            //Power
            case 'PUI': {
                const { p_ui } = wasm_bindgen;
                // P = U * I;
                document.getElementById('power').value = p_ui(U, I);
                
                idp.style.backgroundColor = '#03a5a5';
                calcI = document.querySelectorAll('#voltage, #current');
                calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('PUI');
                break;
            }


            case 'PIR': {
                const { p_ir } = wasm_bindgen;
                // P = Math.pow(I, 2) * R;
                document.getElementById('power').value = p_ir(I, R);
                
                idp.style.backgroundColor = '#03a5a5';
                calcI = document.querySelectorAll('#current, #resistance');
                calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('PIR');
                break;
            }


            case 'PUR': {
                const { p_ur } = wasm_bindgen;
                // P = Math.pow(U, 2) / R;
                document.getElementById('power').value = p_ur(U, R);
                
                idp.style.backgroundColor = '#03a5a5';
                calcI = document.querySelectorAll('#voltage, #resistance');
                calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('PUR');
                break;
            }

            case 'PIUcos': {
                const { p_iucosfi } = wasm_bindgen;
                // P = I * U * cosfi;
                document.getElementById('power').value = p_iucosfi(I, U, cosfi);
                
                idp.style.backgroundColor = '#03a5a5';
                calcI = document.querySelectorAll('#voltage, #current, #power, #cosfi');
                calcI.forEach(e => { e.addEventListener('input', ohmlaw) });
                // console.log('PIUcos');
                break;
            }


            case null: {
                alert('formula not selected');

            }
        }
    })()

    // udalen. podsv. label input
    if (formula !== 'UIR' && formula !== 'UPI' && formula !== 'UPR' && formula !== 'UPIcos') { document.getElementById('U').removeAttribute('style') };
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