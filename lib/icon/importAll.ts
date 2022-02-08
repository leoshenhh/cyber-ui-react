try {
    const reqSvg = require.context('../../icons', true, /\.svg$/);
    reqSvg.keys().map(path => reqSvg(path));
} catch (err) {
    // console.log(err);
}
