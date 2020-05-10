const map = require('./grammars');
const runIt = require('./run');
function tryReturn(code) {
    try {
        return runIt(code);
    }
    catch (err) {
        return false;
    }
}
function tryRun(code) {
    try {
        runIt(code);
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}
for (key in map) {
    const values = map[key];
    console.log(values, key, map);
    values.forEach(value => {
        const {name, grammar, type} = value;
        let tryFun = tryRun;
        if (type === 'return') {
            tryFun = tryReturn;
        }
        const isSupport = tryFun(grammar);
        value.isSupport = isSupport;
    });
}
module.exports = map;
