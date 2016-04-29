
CSS := $(wildcard index.css lib/*.css)
FONTS = $(wildcard lib/fonts/*.wof*)

bundle.css: $(CSS) $(FONTS) node_modules
	./node_modules/.bin/webpack

node_modules: package.json
	npm install
	touch $@

clean:
	rm -f bundle.css

.PHONY: clean
