import React from 'react';
import { Button, Icon, IconElement, List as UIKittenList, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

const List = () => {
  const renderItemAccessory = () => (
    <Button size='tiny'>FOLLOW</Button>
  );

  // const renderItemIcon = (props) => (
  //   <Icon
  //     {...props}
  //     name='person'
  //   />
  // );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      // accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <UIKittenList
      style={styles.container}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 192,
  },
});

export default List;