#!/usr/bin/env node
// @flow
import make from '..';

const startMassage = 'Welcome to the Brain Games!';

const game = make(startMassage, () => {});
game();
