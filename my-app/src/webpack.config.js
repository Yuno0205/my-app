module.export = {
    resolve:{
        fallback: { "zlib": require.resolve("browserify-zlib") }
    }
};