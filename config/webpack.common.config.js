const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        forceAllTransforms: true
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: 'source-map-loader',
                        options: {
                            enforce: 'pre'
                        }
                    }
                ]
            }
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         "sass-loader"
            //     ],
            // }
        ]
    }
};
