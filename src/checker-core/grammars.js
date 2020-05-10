const keys = [
    "concat",
    "copyWithin",
    "entries",
    "every",
    "fill",
    "filter",
    "find",
    "findIndex",
    "flat",
    "flatMap",
    "forEach",
    "includes",
    "indexOf",
    "join",
    "keys",
    "lastIndexOf",
    "map",
    "pop",
    "push",
    "reduce",
    "reduceRight",
    "reverse",
    "shift",
    "slice",
    "some",
    "sort",
    "splice",
    "toLocaleString",
    "toSource",
    "toString",
    "unshift",
    "values"
];
let arrayMaps = keys.map(key => {
    return {
        name: key,
        type: 'return',
        grammar: `return !!(Array.${key} || Array.prototype.${key})`
    };
});
arrayMaps = arrayMaps.concat([
    {
        name: '数组解构',
        grammar: `
                var arr = ["Hello", "World"];
                var [first, second] = arr;
                `
    }
]);

module.exports = {
    'letConst': [
        {
            name: 'let const',
            grammar: `let a = 1; const b = 2;`
        }
    ],
    'Array': arrayMaps,
    'Proxy': [
        {
            type: 'run',
            name: 'Proxy',
            grammar: `var a = new Proxy({}, {})`
        }
    ],
    'Function': [
        {
            name: '箭头函数',
            grammar: `var a = () => {}`
        }
    ],
    'Generator': [

    ],
    'Promise': [

    ],
    'WeakMap': [

    ],
    'WeakSet': [

    ],
    'WebAssembly': [

    ],
    'Symbol': [

    ],
    'Reflect': [

    ],
    'RegExp': [

    ],
    'Set': [

    ],
    'Map': [
        {
            name: 'Map',
            grammar: `var map = new Map();`
        },
    ]

};
