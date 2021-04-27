lint:  ;@echo "Linting ${PROJECT}....."; \
	./node_modules/.bin/eslint . --fix

run: ;@echo "Starting ${PROJECT}....."; \
	npm start

install: ;@echo "Installing ${PROJECT}....."; \
	npm install

build: ;@echo "Installing ${PROJECT}....."; \
	npm run build

clean : ;
	rm -rf node_modules