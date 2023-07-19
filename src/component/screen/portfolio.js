import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { fetchData } from '../../store/actions';
import { useEffect } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
  }
});

const Portfolio = (props) => {

  useEffect(() => {
    async function loadPhotos() {
      await props.loadPhotos()
    }
    loadPhotos();
  }, [])

  useEffect(() => {
    console.log('test', props.photos);
  }, [props.photos])

  return (  
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio
      {/* {JSON.stringify(props)} */}
      
       eyy</Text>
    </View>
  );
}

// export default Portfolio;


const mapStateToProps = state => ({
  photos: state.photos,
});

const mapDispatchToProps = dispatch => {
  return {
    loadPhotos: () => dispatch(fetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);