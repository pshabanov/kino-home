import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[]{

    const cssLoader = {
        test: /\.s[ac]ss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
 return [
     tsLoader,
     cssLoader
 ]
}