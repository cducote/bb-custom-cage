(() => ({
  name: 'HelloWorld',
  type: 'ROW',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: <img src='https://i.imgur.com/YXACVAZ.gif' alt='cage'/>,
  styles: B => ({ typography }) => ({
    root: {
      fontFamily: ({ options: { headingType } }) =>
        typography[headingType].family,
      fontSize: ({ options: { headingType } }) =>
        typography[headingType].mobileSize,
      fontWeight: ({ options: { headingType } }) =>
        typography[headingType].weight,
      textTransform: ({ options: { headingType } }) =>
        typography[headingType].textTransform,
      textAlign: ({ options: { textAlignment } }) => textAlignment,
      letterSpacing: ({ options: { headingType } }) =>
        typography[headingType].letterSpacing,
      color: ({ options: { headingType, color } }) =>
        color || typography[headingType].color,
      [`@media ${B.mediaMinWidth(768)}`]: {
        fontSize: ({ options: { headingType } }) =>
          typography[headingType].tabletPortraitSize,
      },
      [`@media ${B.mediaMinWidth(1024)}`]: {
        fontSize: ({ options: { headingType } }) =>
          typography[headingType].tabletLandscapeSize,
      },
      [`@media ${B.mediaMinWidth(1200)}`]: {
        fontSize: ({ options: { headingType } }) =>
          typography[headingType].desktopSize,
      },
    },
  }),
}))();

// import ncage from '../assets/ncage.jpg'