import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
  },
  headingWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginBottom: 5,
    },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    borderRadius: 5,
    backgroundColor: 'purple',
    padding: 5,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    borderRadius: 10,
    textAlign: 'right',
    fontSize: 28,
    padding: 10,
    borderWidth: 2, 
    borderColor: 'black',  
    borderStyle: 'solid',
    elevation: 5,
  },
  btnWrapper: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: 70,
    height: 70,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  clearBtn: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 28,
  },
  equalBtnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  equalBtn: {
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  imageWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cloudImageContainer: {
    position: 'relative',
    width: 240,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloudImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  overlayText: {
    position: 'absolute',
    fontSize: 16,
    top: 30,
    left: 80,
    fontWeight: '900',
    textAlign: 'center',
  },
  company: {
    color: '#23605c',
    fontSize: 20,
  }

});
export default styles;