import React from 'react';
import {rerenderEntireTree} from './render';
import {state} from './redux/state';

rerenderEntireTree(state)