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
    async function loadData() {
      await props.loadData()
    }
    loadData();
  }, []);

  useEffect(() => {
    console.log('photos', props.photos);
  }, [props.photos]);

  useEffect(() => {
    console.log('videos', props.videos);
  }, [props.videos]);

  useEffect(() => {
    console.log('details', props.details);
  }, [props.details]);

  useEffect(() => {
    console.log('comments', props.comments);
  }, [props.comments]);

  return (  
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio</Text>
    </View>
  );
}

const mapStateToProps = state => ({
  photos: state.photos,
  videos: state.videos,
  details: state.details,
  comments: state.comments,
});

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(fetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);