// voltage
#[wasm_bindgen]
pub fn u_ir(i: f64, r: f64) -> f64 {
    (i * r * 1000.0).round() / 1000.0
}

#[wasm_bindgen]
pub fn u_pi(p: f64, i: f64) -> f64 {
    (p / i * 1000.0).round() / 1000.0
}

#[wasm_bindgen]
pub fn u_pr(p: f64, r: f64) -> f64 {
    ((p * r).sqrt() * 1000.0).round() / 1000.0
}

#[wasm_bindgen]
pub fn u_picosfi(p: f64, i: f64, cosfi: f64) -> f64 {
    (p / (i * cosfi) * 1000.0).round() / 1000.0
}
//amperage
#[wasm_bindgen]
pub fn i_ur(u: f64, r: f64) -> f64 {
    (u / r * 1000.0).round() / 1000.0
}

#[wasm_bindgen]
pub fn i_pu(p: f64, u: f64) -> f64 {
    (p / u * 1000.0).round() / 1000.0
}

#[wasm_bindgen]
pub fn i_pr(p: f64, r: f64) -> f64 {
    ((p / r).sqrt() * 1000.0).round() / 1000.0
}

#[wasm_bindgen]
pub fn i_pucosfi(p: f64, u: f64, cosfi: f64) -> f64 {
    (p / (u * cosfi) * 1000.0).round() / 1000.0
}
// resistance
#[wasm_bindgen]
pub fn r_ui(u: f64, i: f64) -> f64 {
    (u / i * 1000.0).round() / 1000.0
}

#[wasm_bindgen]
pub fn r_pi(p: f64, i: f64) -> f64 {
    (p / i.powi(2) * 1000.0).round() / 1000.0
}

#[wasm_bindgen]
pub fn r_up(u: f64, p: f64) -> f64 {
    (u.powi(2) / p * 1000.0).round() / 1000.0
}
// power
#[wasm_bindgen]
pub fn p_ui(u: f64, i: f64) -> f64 {
    (u * i * 1000.0).round() / 1000.0
}

#[wasm_bindgen]
pub fn p_ir(i: f64, r: f64) -> f64 {
    (i.powi(2) * r * 1000.0).round() / 1000.0
}

#[wasm_bindgen]
pub fn p_ur(u: f64, r: f64) -> f64 {
    (u.powi(2) / r * 1000.0).round() / 1000.0
}

#[wasm_bindgen]
pub fn p_iucosfi(i: f64, u: f64, cosfi: f64) -> f64 {
    (i * (u * cosfi) * 1000.0).round() / 1000.0
}
