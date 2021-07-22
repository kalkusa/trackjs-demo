import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TrackJS } from "../util/trackjs-isomorphic.js";

if (!TrackJS.isInstalled()) {
  TrackJS.install({
    token: "545f75d54fbb4306ae3450c500f1407e",
    onError: (payload) => {
      // we caught an error!
      // you can manipulate it by inspecting the *payload*
      // @see https://docs.trackjs.com/data-api/capture/#request-payload

      console.log("we caught an error. See the integration in _app.js for details.", payload);

      // returning false will ignore the error
      return true;
    }
  });
}
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.componentDidCatch = (error, errorInfo) => {
  TrackJS.track(error);
  // this.setState({ error });
  // Anything else you want to do with the error.
}
export default MyApp
