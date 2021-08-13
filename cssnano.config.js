/*
    !   REF
    *   https://github.com/parcel-bundler/parcel/issues/2920#issuecomment-482833294
*/
module.exports = {
  preset: [
    'default',
    {
      minifyFontValues: {
        removeQuotes: false,
      },
      normalizeUrl: false,
    },
  ],
};