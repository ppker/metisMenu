import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json' with { type: "json" };

const banner = `/*!
* ${pkg.name} ${pkg.homepage}
* ${pkg.description}
* @version ${pkg.version}
* @author ${pkg.author}
* @license: ${pkg.license} 
*/`;

const production = !process.env.ROLLUP_WATCH;

export default [
    {
        input: 'src/index.js',
        external: ['jquery'],
        output: [
            {
                name: 'metisMenu',
                banner,
                globals: {
                    jquery: '$',
                },
                file: production ? pkg.main : 'docs/assets/js/metisMenu.js',
                exports: "named",
                format: 'umd',
                sourcemap: true,
            },
            {
                file: pkg.module,
                banner,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
        ],
    },
];
