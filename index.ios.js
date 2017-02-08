/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// npm --isave json-server
// json-server db.json
 import React, { Component } from 'react';
 import { AppRegistry, StyleSheet } from 'react-native';
 import { Todo } from './src/app/todo';
 import { Reddit } from './src/app/Reddit'
 import { TodoLists } from './src/app/todoLists'
 import { MainPage } from './src/app/MainPage'

 const Main = () => (<MainPage/>)



 AppRegistry.registerComponent('Todo', () => Main);
