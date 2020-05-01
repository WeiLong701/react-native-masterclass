import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const Dashboard: React.FC = () => {
  const {signOut} = useContext(AuthContext);

  function handleSingOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSingOut} />
    </View>
  );
};

export default Dashboard;
