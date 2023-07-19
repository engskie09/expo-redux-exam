import { StyleSheet, Image, Text } from 'react-native';
import { Button, Icon, IconElement, List as UIKittenList, ListItem, Divider } from '@ui-kitten/components';


const data = [
  {
    title: 'HOME & UTILITIES',
    spent: 3296.98,
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
  {
    title: 'TRAVEL',
    spent: 3296.98,
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
  {
    title: 'RIDE SHARING',
    spent: 3296.98,
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
  {
    title: 'GROCERIES',
    spent: 3296.98,
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
  {
    title: 'DRINKS',
    spent: 3296.98,
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
  {
    title: 'RENT',
    spent: 3296.98,
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
]

const List = () => {

  const RenderItemTitle = ({ title }) => (
    <Text style={styles.title}>{ title }</Text>
  );

  const RenderItemSpent = ({ spent }) => (
    <Text style={styles.spent}>${ spent }</Text>
  );


  // const RenderItemAccessory = ({ cash }) => (
  //   <Text style={styles.cash}>${ cash.toLocaleString("en-US") }</Text>
  // );

  const RenderItemIcon = ({ uri }) => (
    <Image style={styles.icon} source={{ uri }} />
  );


  const renderItem = ({ item, index }) => (
    <ListItem
      title={() => <RenderItemTitle title={item.title}/>}
      description={() => <RenderItemSpent spent={item.spent}/>}
      accessoryLeft={() => <RenderItemIcon uri={item.uri}></RenderItemIcon>}
      // accessoryRight={() => <RenderItemAccessory cash={item.cash}/>}
    />
  );

  return (
    <UIKittenList
      scrollEnabled
      style={styles.container}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={<Divider style={styles.divider}/>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  title: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: '300',
  },
  spent: {
    marginLeft: 15,
    fontSize: 23,
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
    borderRadius: 60
  },
  divider: {
    alignSelf : 'stretch',
    backgroundColor : '#edf1f7'
  }
});

export default List;