import { createMuiTheme } from '@material-ui/core/styles';

function MKTheme() {
    return createMuiTheme({
        overrides: {
            MuiOutlinedInput:{
                input: {
                    padding: '6px 4px' 
                }
            },
            MuiCardActions:{
                root: {
                    textAlign: 'right',
                    display: 'block',
                    borderTop: "solid 1px #E9EDF5"
                }
            },
            MuiFormControl: {
                marginNormal: {
                    marginTop: 0 // This is for the date picker only...!
                }
            },
            MuiInputBase: {
                input: {
                    // textIndent: "4px",
                    padding: 0
                },
                root: {
                    // height: "32px", //This height was overridding when in textarea mode so the height stayed the same 
                    // border: "solid 1px #CED4E0",
                    // borderRadius: "2px",
                }
            },
            MuiFormLabel: {
                root:{
                    marginBottom: "8px"
                }
            },
            MuiCardHeader:{
                title: {
                    verticalAlign: "top", // This actually is done in the mk-card-header css as needed to select all children for this style
                    userSelect: "none"
                },
                root: {
                    borderBottom: "solid 1px #E9EDF5"
                }
            },
        },
        typography: {
            button: {
                textTransform: 'none',
                letterSpacing: '0.5px',
                fontWeight: 'normal',
            },
            fontFamily: 'Arial',
            fontSize: 14,
            fontWeightRegular: 'normal',
            allVariants: {
                color: "#333"
            },

        },
        props: {
          // Name of the component ⚛️
          MuiButtonBase: {
            // The default props to change
            disableRipple: true, // No more ripple, on the whole application 💣!
          },
          MuiInput: {
            disableUnderline: true,

          },
          MuiFormControl: {
              margin: 'none'
          },
          MuiTextField:{
            variant: 'outlined',
            fullWidth: true
          },
          MuiSelect:{
              variant: 'outlined'
          }
        },
        palette: {
            text: {
                primary: '#333333',
                secondary: '#757A80'
            },
            primary: {
              // light: will be calculated from palette.primary.main,
              main: '#1975FF', // this is the background
              // dark: will be calculated from palette.primary.main,
              // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
              //light: '#0066ff',
              main: '#1975FF', // this is the text colour when not contained
              //contrastText: '#1975FF'
              // dark: will be calculated from palette.secondary.main,
            // contrastText: '#ffcc00',
            },
            // Used by `getContrastText()` to maximize the contrast between
            // the background and the text.
            contrastThreshold: 3,
            // Used by the functions below to shift a color's luminance by approximately
            // two indexes within its tonal palette.
            // E.g., shift from Red 500 to Red 300 or Red 700.
            tonalOffset: 0.1, //Difference between no hover and hover
          }
      });
}
export default MKTheme