let wasm_bindgen;
(function() {
    const __exports = {};
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }
    let wasm = undefined;
    /**
     * @param {number} i
     * @param {number} r
     * @returns {number}
     */
    __exports.u_ir = function(i, r) {
        const ret = wasm.p_ui(i, r);
        return ret;
    };

    /**
     * @param {number} p
     * @param {number} i
     * @returns {number}
     */
    __exports.u_pi = function(p, i) {
        const ret = wasm.i_pu(p, i);
        return ret;
    };

    /**
     * @param {number} p
     * @param {number} r
     * @returns {number}
     */
    __exports.u_pr = function(p, r) {
        const ret = wasm.u_pr(p, r);
        return ret;
    };

    /**
     * @param {number} p
     * @param {number} i
     * @param {number} cosfi
     * @returns {number}
     */
    __exports.u_picosfi = function(p, i, cosfi) {
        const ret = wasm.u_picosfi(p, i, cosfi);
        return ret;
    };

    /**
     * @param {number} u
     * @param {number} r
     * @returns {number}
     */
    __exports.i_ur = function(u, r) {
        const ret = wasm.i_pu(u, r);
        return ret;
    };

    /**
     * @param {number} p
     * @param {number} u
     * @returns {number}
     */
    __exports.i_pu = function(p, u) {
        const ret = wasm.i_pu(p, u);
        return ret;
    };

    /**
     * @param {number} p
     * @param {number} r
     * @returns {number}
     */
    __exports.i_pr = function(p, r) {
        const ret = wasm.i_pr(p, r);
        return ret;
    };

    /**
     * @param {number} p
     * @param {number} u
     * @param {number} cosfi
     * @returns {number}
     */
    __exports.i_pucosfi = function(p, u, cosfi) {
        const ret = wasm.i_pucosfi(p, u, cosfi);
        return ret;
    };

    /**
     * @param {number} u
     * @param {number} i
     * @returns {number}
     */
    __exports.r_ui = function(u, i) {
        const ret = wasm.i_pu(u, i);
        return ret;
    };

    /**
     * @param {number} p
     * @param {number} i
     * @returns {number}
     */
    __exports.r_pi = function(p, i) {
        const ret = wasm.r_pi(p, i);
        return ret;
    };

    /**
     * @param {number} u
     * @param {number} p
     * @returns {number}
     */
    __exports.r_up = function(u, p) {
        const ret = wasm.p_ur(u, p);
        return ret;
    };

    /**
     * @param {number} u
     * @param {number} i
     * @returns {number}
     */
    __exports.p_ui = function(u, i) {
        const ret = wasm.p_ui(u, i);
        return ret;
    };

    /**
     * @param {number} i
     * @param {number} r
     * @returns {number}
     */
    __exports.p_ir = function(i, r) {
        const ret = wasm.p_ir(i, r);
        return ret;
    };

    /**
     * @param {number} u
     * @param {number} r
     * @returns {number}
     */
    __exports.p_ur = function(u, r) {
        const ret = wasm.p_ur(u, r);
        return ret;
    };

    /**
     * @param {number} i
     * @param {number} u
     * @param {number} cosfi
     * @returns {number}
     */
    __exports.p_iucosfi = function(i, u, cosfi) {
        const ret = wasm.p_iucosfi(i, u, cosfi);
        return ret;
    };

    async function __wbg_load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);

                } catch (e) {
                    if (module.headers.get('Content-Type') != 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else {
                        throw e;
                    }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);

        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };

            } else {
                return instance;
            }
        }
    }

    function __wbg_get_imports() {
        const imports = {};
        imports.wbg = {};
        imports.wbg.__wbindgen_init_externref_table = function() {
            const table = wasm.__wbindgen_export_0;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
            ;
        };

        return imports;
    }

    function __wbg_init_memory(imports, memory) {

    }

    function __wbg_finalize_init(instance, module) {
        wasm = instance.exports;
        __wbg_init.__wbindgen_wasm_module = module;


        wasm.__wbindgen_start();
        return wasm;
    }

    function initSync(module) {
        if (wasm !== undefined) return wasm;


        if (typeof module !== 'undefined') {
            if (Object.getPrototypeOf(module) === Object.prototype) {
                ({module} = module)
            } else {
                console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
            }
        }

        const imports = __wbg_get_imports();

        __wbg_init_memory(imports);

        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }

        const instance = new WebAssembly.Instance(module, imports);

        return __wbg_finalize_init(instance, module);
    }

    async function __wbg_init(module_or_path) {
        if (wasm !== undefined) return wasm;


        if (typeof module_or_path !== 'undefined') {
            if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                ({module_or_path} = module_or_path)
            } else {
                console.warn('using deprecated parameters for the initialization function; pass a single object instead')
            }
        }

        if (typeof module_or_path === 'undefined' && typeof script_src !== 'undefined') {
            module_or_path = script_src.replace(/\.js$/, '_bg.wasm');
        }
        const imports = __wbg_get_imports();

        if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
            module_or_path = fetch(module_or_path);
        }

        __wbg_init_memory(imports);

        const { instance, module } = await __wbg_load(await module_or_path, imports);

        return __wbg_finalize_init(instance, module);
    }

    wasm_bindgen = Object.assign(__wbg_init, { initSync }, __exports);

})();
