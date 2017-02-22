#!/usr/bin/env node
// @flow
import make from '..';
import gameLoop from '../games/common';
import { checker, ask } from '../games/even';
import numbers from '../tools/numbers';

const startMessage = 'Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no';

const game = make(startMessage, gameLoop, numbers([], 5), checker, ask);
game();
