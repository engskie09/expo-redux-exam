import { StyleSheet, Image } from 'react-native';
import { Button, Icon, IconElement, List as UIKittenList, ListItem, Divider } from '@ui-kitten/components';


const data = [
  {
    title: 'WEALTHFRONT',
    description: 'Personal Savings',
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
  {
    title: 'BANK OF AMERICA',
    description: 'BofA Checkings',
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
  {
    title: 'ROBINHOOD',
    description: 'Robinhood Cash',
    uri: 'https://picsum.photos/200?' + Math.random(),
  },
  {
    title: 'COINBASE PRO',
    description: 'Coinbase USD',
    uri: 'https://picsum.photos/200?' + Math.random(),
  }
]

const List = () => {
  const renderItemAccessory = () => (
    <Button size='tiny'>FOLLOW</Button>
  );

  const renderItemIcon = (props) => (
    <Icon
      {...props}
      name='person'
    />
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      // accessoryLeft={<Image style={{ width: '100%', height: '100%', resizeMode: 'stretch'}} source={{uri: item.uri}} />}
      accessoryRight={renderItemAccessory}
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
  container: {},
});

export default List;