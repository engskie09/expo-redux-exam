import { StyleSheet, Image } from 'react-native';
import { Button, Icon, IconElement, List as UIKittenList, ListItem, Divider, Text } from '@ui-kitten/components';


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
  }
]

const List = () => {

  const RenderItemAccessory = ({ cash }) => (
    <Text style={styles.cash}>${ cash.toLocaleString("en-US") }</Text>
  );

  const RenderItemIcon = ({ uri }) => (
    <Image style={styles.icon} source={{ uri }} />
  );


  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={() => <RenderItemIcon uri={item.uri}></RenderItemIcon>}
      accessoryRight={() => <RenderItemAccessory cash={item.cash}/>}
    />
  );

  return (
    <UIKittenList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
    />
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#ffffff'},
  icon: { width: 50, height: 30, resizeMode: 'stretch'},
  cash: { fontSize: 20 }
});

export default List;