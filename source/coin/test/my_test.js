var Token = artifacts.require("TokenERC20");
contract('myTest', function (accounts) {
  it("transfer should work", function (done) {
    let token;
    return Token.deployed().then(instance => {
      token = instance;
      console.log("start transfer");
      return token.transfer(accounts[1], 2)
        .then(() => token.balanceOf.call(accounts[1]))
        .then((r) => {
          assert.equal(r.toNumber(), 2);
          console.log(r.toNumber());
        }).then(() => {
          return token.transfer(accounts[1], 12)
            .then(() => token.balanceOf.call(accounts[1]))
            .then((r) => {
              assert.equal(r.toNumber(), 14);
              console.log(r.toNumber());
            }).then(() => {
              return token.transfer(accounts[2], 112)
                .then(() => token.balanceOf.call(accounts[2]))
                .then((r) => {
                  assert.equal(r.toNumber(), 112);
                  console.log(r.toNumber());
                });
            });
        })
    });
  });
});
