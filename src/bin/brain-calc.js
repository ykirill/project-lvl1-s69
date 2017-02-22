#!/usr/bin/env node
// @flow
import make from '..';
import gameLoop from '../games/common';
import { checker, ask } from '../games/calc';
import getExpressions from '../tools/expressions';

const startMessage = 'Welcome to the Brain Games!\nWhat is the result of the expression?\n';

const game = make(startMessage, gameLoop, getExpressions([]), checker, ask);
game();
