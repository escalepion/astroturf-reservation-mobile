[1mdiff --git a/src/components/areaDetail/AddReservationModal.js b/src/components/areaDetail/AddReservationModal.js[m
[1mindex e1a04ab..d798a43 100644[m
[1m--- a/src/components/areaDetail/AddReservationModal.js[m
[1m+++ b/src/components/areaDetail/AddReservationModal.js[m
[36m@@ -9,9 +9,15 @@[m [mimport {[m
 } from 'react-native';[m
 [m
 import ModalContactList from './ModalContactList';[m
[31m-[m
[32m+[m[32mimport BlockCaption from '../common/BlockCaption';[m
 [m
 class AddReservationModal extends Component {[m
[32m+[m[32m    constructor() {[m
[32m+[m[32m        super();[m
[32m+[m[32m        this.state = {[m
[32m+[m[32m            selectedPerson : undefined[m
[32m+[m[32m        }[m
[32m+[m[32m    }[m
     render() {[m
         const { visible, closeModal, onAddConfirm } = this.props;[m
         return ([m
[36m@@ -21,15 +27,16 @@[m [mclass AddReservationModal extends Component {[m
                 visible={visible}[m
                 onRequestClose={() => { }}[m
             >[m
[31m-                <TouchableWithoutFeedback onPress={closeModal}>[m
[32m+[m[32m                {/*<TouchableWithoutFeedback onPress={closeModal}>*/}[m
                     <View style={styles.container}>[m
                         <View style={styles.contentContainer}>[m
[32m+[m[32m                            <BlockCaption>{this.state.selectedPerson ? this.state.selectedPerson : 'Kişi seçiniz'}</BlockCaption>[m
                             <ModalContactList/>[m
                             <TouchableOpacity onPress={onAddConfirm}><Text>Ekle</Text></TouchableOpacity>[m
                             <TouchableOpacity onPress={closeModal}><Text>İptal</Text></TouchableOpacity>[m
                         </View>[m
[31m-                        </View>[m
[31m-                </TouchableWithoutFeedback>[m
[32m+[m[32m                    </View>[m
[32m+[m[32m                {/*</TouchableWithoutFeedback>*/}[m
             </Modal>[m
         );[m
     }[m
[36m@@ -43,7 +50,8 @@[m [mconst styles = StyleSheet.create({[m
         justifyContent: 'center'[m
     },[m
     contentContainer: {[m
[31m-        backgroundColor: '#FFFFFF'[m
[32m+[m[32m        backgroundColor: '#FFFFFF',[m
[32m+[m[32m        alignItems : 'center'[m
     }[m
 });[m
 [m
[1mdiff --git a/src/components/areaDetail/ModalContactList.js b/src/components/areaDetail/ModalContactList.js[m
[1mindex 37113e7..8a2d3e3 100644[m
[1m--- a/src/components/areaDetail/ModalContactList.js[m
[1m+++ b/src/components/areaDetail/ModalContactList.js[m
[36m@@ -1,5 +1,5 @@[m
 import React, { Component } from 'react';[m
[31m-import { View, Text, FlatList } from 'react-native';[m
[32m+[m[32mimport { View, Text, FlatList, StyleSheet } from 'react-native';[m
 [m
 [m
 class ModalContactList extends Component {[m
[36m@@ -24,8 +24,8 @@[m [mclass ModalContactList extends Component {[m
                 Expo.Contacts.PHONE_NUMBERS,[m
                 Expo.Contacts.EMAILS,[m
             ],[m
[31m-            pageSize: 10,[m
[31m-            pageOffset: 0,[m
[32m+[m[32m            // pageSize: 10,[m
[32m+[m[32m            // pageOffset: 0,[m
         });[m
         this.setState({ contactList });[m
         // if (contacts.total > 0) {[m
[36m@@ -42,10 +42,11 @@[m [mclass ModalContactList extends Component {[m
         if(this.state.contactList && this.state.contactList.data.length === 0) {[m
             return <Text>Henüz kişi eklenmemiş</Text>;[m
         }else if(this.state.contactList && this.state.contactList.data.length > 0) {[m
[32m+[m[32m            console.log(this.state.contactList);[m
             return ([m
                 <FlatList[m
                     data={this.state.contactList.data}[m
[31m-                    renderItem={({ item, index }) => <Text>{item.name}</Text>}[m
[32m+[m[32m                    renderItem={({ item, index }) => <Text>{item.name && item.name} {item.phoneNumbers && item.phoneNumbers[0].number}</Text>}[m
                     keyExtractor={(item, index) => index}[m
                 />[m
             );[m
[36m@@ -54,12 +55,20 @@[m [mclass ModalContactList extends Component {[m
         }[m
     }[m
     render() {[m
[32m+[m[32m        const {container} = styles;[m
         return ([m
[31m-            <View>[m
[32m+[m[32m            <View style={styles.container}>[m
                 {this.mapContactList()}[m
             </View>[m
         );[m
     }[m
 }[m
 [m
[32m+[m[32mconst styles = StyleSheet.create({[m
[32m+[m[32m    container: {[m
[32m+[m[32m        minHeight: 50,[m
[32m+[m[32m        maxHeight: 150[m
[32m+[m[32m    }[m
[32m+[m[32m});[m
[32m+[m
 export default ModalContactList;[m
