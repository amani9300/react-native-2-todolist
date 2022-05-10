import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import Flexbox from './Flexbox';
import { Entypo } from '@expo/vector-icons';
import Task from './components/Task';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Flexbox />
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     borderColor: 'red',
//     borderWidth: 3,
//     // flex: 1 // la hauteur et la largeur du parent
//   }
// })


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        {/* liste des tasks */}
        <ScrollView>
          <Task text='Finir le cours' />
          <Task text='Manger'/>
          <Task text='Dormir'/>
          <Task text='Etudier'/>
          <Task text='Faire du sport'/>
          <Task text='Regarder youtube'/>
         
        </ScrollView>
      </View>

      <View style={styles.addTaskWrapper}>
        {/* input  */}
        <TextInput style={styles.textInput} placeholder='write a task...' />
        {/* button */}
        {/* 2types de bouton : Button , TouchableOpacity */}
        {/* <Button title='CLICK' color='red'/> */}
        <TouchableOpacity style={styles.btnAdd}>
          <Entypo name='plus' size={30} color='#ccc' />
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EAED',
    flex: 1,
    justifyContent:'space-between'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  addTaskWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingVertical: 20,
    flex: 1,
  },
  textInput: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    width: '80%',
  },
  btnAdd: {
    // marginHorizontal: 10,
    borderRadius: 50,
    width: 50,
    height: 50,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  }
})
