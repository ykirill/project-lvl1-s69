install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

even:
	npm run babel-node -- src/bin/brain-even.js

build:
	npm run build

lint:
	npm run lint

flow:
	npm run flow

check:
	make flow & make lint

publish:
	npm publish
