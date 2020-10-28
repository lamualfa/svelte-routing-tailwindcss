import preprocess from 'svelte-preprocess';
import resolveConfig from 'svelte-routing-util/rollup';
import replace from '@rollup/plugin-replace';

export default resolveConfig({
  resolvePlugins: (plugins) => {
    plugins.unshift(
      replace({
        isProduction: !process.env.ROLLUP_WATCH,
      })
    );

    return plugins;
  },
  browserSveltePluginOptions: {
    preprocess: preprocess({
      postcss: { configFilePath: './postcss.config.js' },
      defaults: { style: 'postcss' },
    }),
  },
});
