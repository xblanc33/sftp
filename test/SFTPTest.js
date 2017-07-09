var assert = require('assert');
const SftpClient = require('sftp-promises');

function createSFTPClient() {
    return new SftpClient({
        host: '127.0.0.1',
        port: '2222',
        username: 'foo',
        password: 'pass'
    });
}

describe('SFTPClient test', function() {

    it('should accept connexion and create a directory', function() {
        createSFTPClient().mkdir('test').then(() => {
            assert.true();
            done();
        });
    });

});
