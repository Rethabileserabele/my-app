import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
const image = { uri: "https://www.dropbox.com/s/metf4ytkpbnj2fz/IMG_20190204_113418.jpg?dl=1" };

const App = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text1}>Student Portal </Text>
     <Image source={image} style={styles.image}></Image>
     <Text style={styles.text}>
         Student Names: Rethabile Serabele</Text>
         <Text style={styles.text}>Student ID: 901013611</Text>
      <ScrollView style={styles.scrollView}>
       <View style={styles.makeborders}>          
        <Text style={styles.text}>
         Current Semester:_______________________________________________________
          </Text>
          <Text style={styles.text}>Software Modelling ........................</Text>
          <Text style={styles.text}>Mobile Programming  ........................</Text>
          <Text style={styles.text}>Probability and Statistics</Text>
          <Text style={styles.text}>Java 1 Programming ........................</Text>
          <Text style={styles.text}>C++ 2 Programming ........................</Text>
          <Text style={styles.text}>DataBase Sytems ........................</Text>
          </View>
            <View style={styles.makeborders1}>
            <Text style={styles.text}>
             Second Semester:_______________________________________________________            
          </Text>
          <Text style={styles.text}>Software Modelling ........................B</Text>
          <Text style={styles.text}>Fundamentals of Internet Technoloy ........................B-</Text>
          <Text style={styles.text}>Culculus 2       ..............................A+ </Text>
          <Text style={styles.text}>Principles of WebDesign ........................B+</Text>
          <Text style={styles.text}>C++  Programming ........................B</Text>
          <Text style={styles.text}>DataCommunication & Networking ........................c+</Text>
           </View>
         <View style={styles.makeborders2}>
        <Text style={styles.text}>
        Third Semester:_______________________________________________________
           
        </Text>
        <Text style={styles.text}>Software Modelling ........................B+</Text>
          <Text style={styles.text}>Mobile Programming ........................B-</Text>
          <Text style={styles.text}>Culculus 2       ..............................A+ </Text>
          <Text style={styles.text}>Java 1 Programming ........................C+</Text>
          <Text style={styles.text}>C++ 2 Programming ........................A</Text>
          <Text style={styles.text}>DataBase Sytems ........................c-</Text>
       
        </View>
        <ScrollView style={styles.anotherscroll}/>
       
        
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#708090',
    marginTop: 60,
  },
  scrollView: {
    marginHorizontal: 2,
    marginVertical: 2
  },
  image: {
    marginTop: 10,
    width: 100,
    height: 100, 
    borderRadius: 200/ 2,
  },
  text: {

    width: '100%',
    marginTop: 10,
  
    fontSize: 14,
    color: 'white',
   
  },
  text1: {
    borderTopColor: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 24,
    color: 'white',
    
  },
  makeborders:{
    marginTop: 20,
    backgroundColor: '#008B8B',
    borderColor: 'white',
    borderWidth:  1,
  },
  makeborders1:{
    marginTop: 20,
    backgroundColor: '#008B8B',
    borderColor: 'white',
    borderWidth:  1,
  },
   makeborders2:{
    marginTop: 20,
    backgroundColor: '#008B8B',
    borderColor: 'white',
    borderWidth:  1
  }
   
});

export default App;
