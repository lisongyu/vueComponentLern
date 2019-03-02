/**
 * author:  lirong on 2017/4/5.
 * description:
 */
module.exports = {
  plugins: [

    require('autoprefixer')({
      "browsers":["last 2 versions","Firefox >= 20",'iOS 7']}),
    require('postcss-px2rem')({remUnit: 75})
  ]
}
