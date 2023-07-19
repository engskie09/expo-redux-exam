import { StyleSheet, Image, Text } from 'react-native';
import { Button, Icon, IconElement, List as UIKittenList, ListItem, Divider } from '@ui-kitten/components';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const data = [
  {
    isHeader: true,
  },
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
  {
    isAction: true,
  },
]

const List = () => {

  const RenderItemTitle = ({ title }) => (
    <Text style={styles.title}>{ title }</Text>
  );

  const RenderItemSpent = ({ spent }) => (
    <Text style={styles.spent}>${ spent }</Text>
  );


  const RenderItemAccessory = ({ cash }) => (
    <FontAwesome name='angle-right' size={30} width={20} color={'#00000060'} />
  );

  const RenderItemIcon = ({ uri }) => (
    <Image style={styles.icon} source={{ uri }} />
  );


  const RenderItem = ({ item, index }) => (
    <ListItem
      title={() => <RenderItemTitle title={item.title}/>}
      description={() => <RenderItemSpent spent={item.spent}/>}
      accessoryLeft={() => <RenderItemIcon uri={item.uri}></RenderItemIcon>}
      accessoryRight={() => <RenderItemAccessory />}
    />
  );

  const RenderHeader = () => (
    <ListItem description={() => <Text style={styles.header}>Top Spending Categories</Text>} />
   );

  const RenderAction = () => (
   <ListItem
      description={() => <Text style={styles.categories}>View All Categories</Text>}
      accessoryRight={() => <RenderItemAccessory />}
    />
  );

  return (
    <UIKittenList
      scrollEnabled
      style={styles.container}
      data={data}
      renderItem={({item, index}) => !item.isAction && !item.isHeader? <RenderItem item={item} index={index} /> : !item.isAction ? <RenderHeader /> : <RenderAction />}
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
  },
  header: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  categories: {
    fontSize: 23,
    color: '#00000060'
  }
});

export default List;