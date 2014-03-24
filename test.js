var assert = require('assert');

var legoColors = require('./index');

var rust = legoColors.getByLegoNumber(216);

assert.equal('Rust', rust.name);
assert.deepEqual([18, 82, 97, 30], rust.cmyk);
assert.deepEqual([143, 76, 42], rust.rgb);
assert.equal('174 C', rust.pantone);

assert.equal(legoColors.colors.RUST, rust);
