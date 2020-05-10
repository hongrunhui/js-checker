

function tryPassFail(code) {
    try {
        runIt(code);
        return true;
    }
    catch (err) {
        return false;
    }
}

function tryReturn(code) {
    try {
        return runIt(code);
    }
    catch (err) {
        return false;
    }
}

function runIt(code) {
    return (new Function(code))();
}

module.exports = runIt;
