
class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}
class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.account.balance += this.value;
  }
}


class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }

}
const myAccount = new Account("snow-patrol");
console.log('Starting Balance:', myAccount.balance);
const t2 = new Deposit(120.00, myAccount);
t2.commit();
const t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Ending Balance:', myAccount.balance);

