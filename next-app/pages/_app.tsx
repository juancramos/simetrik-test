import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import store, { GlobalState } from '@store/index';

function MyApp({ Component, pageProps }) {
  return (<Component {...pageProps} />);
}

MyApp.getInitialProps = async (appContext) => {
  const { ctx, Component } = appContext;

  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  return {
    pageProps,
  };
};

const makeStore: MakeStore<GlobalState> = (context: Context) => store;

const wrapper = createWrapper<GlobalState>(makeStore, {
  debug: process.env.NODE_ENV === 'production' ? false : true,
});

export default wrapper.withRedux(MyApp);
