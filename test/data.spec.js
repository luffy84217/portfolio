var fs = require('fs');
var expect = require('expect.js');

var actual = {
    about: {
        keys: ["personalPhotoUrl", "name", "infos", "languages", "skills"],
        imgRegex: /\.jpg|\.png|\.bmp|\.gif/,
        info: {
            keys: ['key', 'icon', 'value']
        },
        lang: {
            keys: ['name', 'progress']
        },
        skill: {
            keys: ['name', 'imageUrl']
        }
    },
    footer: {
        keys: ["socialMedias", "poweredBys"],
        urlRegex: /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)/,
        social: {
            keys: ['name', 'icon', 'url']
        },
        power: {
            keys: ['name', 'url']
        }
    },
    works: {
        keys: ['title', 'details', 'link', 'imageUrl', 'platform'],
        imgRegex: /\.jpg|\.png|\.bmp|\.gif/
    }
};

describe('Data Format Verification', function() {

    describe('#about', function() {

            it('key elements setting', function(done) {
                fs.readFile('./data/about.json', 'utf8', function(err, data) {
                    if (err) done(err);
                    data = JSON.parse(data);
                    expect(data).to.only.have.keys(actual.about.keys);
                    done();
                });
            });

            it(`${actual.about.keys[0]} validation`, function(done) {
                fs.readFile('./data/about.json', 'utf8', function(err, data) {
                    if (err) done(err);
                    data = JSON.parse(data);
                    expect(data[actual.about.keys[0]]).to.match(actual.about.imgRegex);
                    done();
                });
            });

            it(`${actual.about.keys[1]} validation`, function(done) {
                fs.readFile('./data/about.json', 'utf8', function(err, data) {
                    if (err) done(err);
                    data = JSON.parse(data);
                    expect(data[actual.about.keys[1]]).to.be.a('string');
                    done();
                });
            });

            it(`${actual.about.keys[2]} validation`, function(done) {
                fs.readFile('./data/about.json', 'utf8', function(err, data) {
                    if (err) done(err);
                    data = JSON.parse(data);
                    expect(data[actual.about.keys[2]]
                        .every(function(info) {
                            return info.hasOwnProperty(actual.about.info.keys[0])
                                && info.hasOwnProperty(actual.about.info.keys[1])
                                && info.hasOwnProperty(actual.about.info.keys[2]);
                        }))
                        .to.be(true);
                    done();
                });
            });

            it(`${actual.about.keys[3]} validation`, function(done) {
                fs.readFile('./data/about.json', 'utf8', function(err, data) {
                    if (err) done(err);
                    data = JSON.parse(data);
                    expect(data[actual.about.keys[3]]
                        .every(function(lang) {
                            return lang.hasOwnProperty(actual.about.lang.keys[0])
                                && lang.hasOwnProperty(actual.about.lang.keys[1]);
                        }))
                        .to.be(true);
                    data[actual.about.keys[3]].forEach(function(lang) {
                        expect(lang[actual.about.lang.keys[1]]).to.be.within(0, 100);
                    });
                    done();
                });
            });

            it(`${actual.about.keys[4]} validation`, function(done) {
                fs.readFile('./data/about.json', 'utf8', function(err, data) {
                    if (err) done(err);
                    data = JSON.parse(data);
                    expect(data[actual.about.keys[4]]
                        .every(function(skill) {
                            return skill.hasOwnProperty(actual.about.skill.keys[0])
                                && skill.hasOwnProperty(actual.about.skill.keys[1])
                                && actual.about.imgRegex.test(skill[actual.about.skill.keys[1]]);
                        }))
                        .to.be(true);
                    done();
                });
            });

          
    });

    describe('#footer', function() {

        it('key elements setting', function(done) {
            fs.readFile('./data/footer.json', 'utf8', function(err, data) {
                if (err) done(err);
                data = JSON.parse(data);
                expect(data).to.only.have.keys(actual.footer.keys);
                done();
            });
        });

        it(`${actual.footer.keys[0]} validation`, function(done) {
            fs.readFile('./data/footer.json', 'utf8', function(err, data) {
                if (err) done(err);
                data = JSON.parse(data);
                expect(data[actual.footer.keys[0]]
                    .every(function(social) {
                        return social.hasOwnProperty(actual.footer.social.keys[0])
                            && social.hasOwnProperty(actual.footer.social.keys[1])
                            && social.hasOwnProperty(actual.footer.social.keys[2]);
                    }))
                    .to.be(true);
                data[actual.footer.keys[0]].forEach(function(social) {
                    expect(social[actual.footer.social.keys[2]]).to.match(actual.footer.urlRegex);
                });
                done();
            });
        });

        it(`${actual.footer.keys[1]} validation`, function(done) {
            fs.readFile('./data/footer.json', 'utf8', function(err, data) {
                if (err) done(err);
                data = JSON.parse(data);
                expect(data[actual.footer.keys[1]]
                    .every(function(power) {
                        return power.hasOwnProperty(actual.footer.power.keys[0])
                            && power.hasOwnProperty(actual.footer.power.keys[1]);
                    }))
                    .to.be(true);
                data[actual.footer.keys[1]].forEach(function(power) {
                    expect(power[actual.footer.power.keys[1]]).to.match(actual.footer.urlRegex);
                });
                done();
            });
        });

    });
    
    describe('#works', function() {

        it('work properties setting', function(done) {
            fs.readFile('./data/works.json', 'utf8', function(err, data) {
                if (err) done(err);
                data = JSON.parse(data);
                data.forEach(function(work) {
                    expect(work).to.have.keys(actual.works.keys);
                });
                done();
            });
        });

        it(`${actual.works.keys[3]} validation`, function(done) {
            fs.readFile('./data/works.json', 'utf8', function(err, data) {
                if (err) done(err);
                data = JSON.parse(data);
                data.forEach(function(work) {
                    expect(work[actual.works.keys[3]]).to.match(actual.works.imgRegex);
                });
                done();
            });
        });

    });
    
});