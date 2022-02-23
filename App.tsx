import React, { useCallback, useState } from 'react';
import { Alert, Modal, StyleSheet, View, Text, Pressable, SafeAreaView, ScrollView, RefreshControl } from 'react-native';

const wait = (timeout: number | undefined) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
}

const App = () => {
    const [refreshing, setRefreshing] = useState(false)
    
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        wait(2000).then(() => setRefreshing(false))
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    >

                    </RefreshControl>
                }
            >
                <Text>Pull down to refresh</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default App;
