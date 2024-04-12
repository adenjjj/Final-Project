// pages/_app.js
// Initialize the global user store if it doesn't already exist
global.users = global.users || {};

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp
