
CSS := $(wildcard index.css lib/*.css)
FONTS = $(wildcard lib/fonts/*.wof*)

bundle.css: $(CSS) $(FONTS) node_modules
	./node_modules/.bin/webpack

clean:
	rm -f bundle.css

.PHONY: clean
