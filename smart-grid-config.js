var smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '8rem', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '114rem', /* max-width оn very large screen */
        fields: '6rem' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '110rem', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '96rem'
        },
        sm: {
            width: '78rem',
            fields: '1.5rem' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '56rem'
        }
    }
};
    smartgrid('./app/sass', settings);