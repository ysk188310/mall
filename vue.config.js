module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // alias别名
                // @是src
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}