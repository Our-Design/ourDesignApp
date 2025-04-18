import React from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {fetchMyLeads, setSelectedLead} from '../../store/slices/leadsSlice';
import styles from './styles';
import LeadCard from '../../components/LeadCard';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Text from '../../components/Text';
import Icons from '../../constants/icons';
import {Image} from 'react-native';

const MyLeads = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();
  const myLeads = useSelector((state: RootState) => state.leads.myLeads);

  useFocusEffect(
    React.useCallback(() => {
      console.log('Mounted');
      dispatch(fetchMyLeads());

      return () => console.log('unmounted');
    }, [dispatch]),
  );

  const handlePress = (lead: any) => {
    dispatch(setSelectedLead(lead));
    navigation.navigate('LeadDetails');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={myLeads}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <LeadCard lead={item} onPress={() => handlePress(item)} />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Leads to Show</Text>
            <Image
              source={Icons.noLeads}
              style={styles.emptyImage}
              resizeMode="contain"
            />
          </View>
        }
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default MyLeads;
