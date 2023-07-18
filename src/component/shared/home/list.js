import { StyleSheet, Image, Text } from 'react-native';
import { Button, Icon, IconElement, List as UIKittenList, ListItem, Divider } from '@ui-kitten/components';


const data = [
  {
    title: 'WEALTHFRONT',
    description: 'Personal Savings',
    cash: 92875,
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
  {
    title: 'BANK OF AMERICA',
    description: 'BofA Checkings',
    cash: 12030,
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
  {
    title: 'ROBINHOOD',
    description: 'Robinhood Cash',
    cash: 7123,
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
  {
    title: 'COINBASE PRO',
    description: 'Coinbase USD',
    cash: 15712,
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
]

const List = () => {

  const RenderItemTitle = ({ title }) => (
    <Text style={styles.title}>{ title }</Text>
  );

  const RenderItemDescription = ({ description }) => (
    <Text style={styles.description}>{ description }</Text>
  );


  const RenderItemAccessory = ({ cash }) => (
    <Text style={styles.cash}>${ cash.toLocaleString("en-US") }</Text>
  );

  const RenderItemIcon = ({ uri }) => (
    <Image style={styles.icon} source={{ uri }} />
  );


  const renderItem = ({ item, index }) => (
    <ListItem
      title={() => <RenderItemTitle title={item.title}/>}
      description={() => <RenderItemDescription description={item.description}/>}
      accessoryLeft={() => <RenderItemIcon uri={item.uri}></RenderItemIcon>}
      accessoryRight={() => <RenderItemAccessory cash={item.cash}/>}
    />
  );

  return (
    <UIKittenList
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
  description: {
    marginLeft: 15,
    fontSize: 23,
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
    borderRadius: 60
  },
  cash: {
    fontSize: 20,
  },
  divider: {
    alignSelf : 'stretch',
    backgroundColor : '#edf1f7'
  }
});

export default List;