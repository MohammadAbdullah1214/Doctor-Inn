const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center"
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 45,
    marginBottom: 5,
    textAlign: "center",
    color: "#be2f47",
  },

    logoColor: {
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 30,
    textAlign: "center",
    color: "#157D9C"
  },

  loginFormView: {
    flex: 1,
  },

  inputicons:{
    width: 20,
    height: 20,
    marginRight: 10,
  },


  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    paddingLeft: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c3cb',
    marginBottom: 10,
  },

  loginButton: {
    backgroundColor: "#157D9C",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: "center",
    borderRadius: 100,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});
export default styles;
