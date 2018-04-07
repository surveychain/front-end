<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      v-model="drawer">
      <app-navigation-content></app-navigation-content>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      fixed
    >
      <v-toolbar-title style="width: 300px" class="<ml></ml>-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Survey Chain</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-label>{{ accountAddr }}</v-label>
      <v-label>{{ balance }}</v-label>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon  @click="clickYellow">
        <v-icon color="yellow">notifications</v-icon>
      </v-btn>
      <v-btn icon @click="clickRed">
        <v-icon color="red">notifications</v-icon>
      </v-btn>
      <v-btn icon @click="clickBlue">
        <v-icon color="blue">notifications</v-icon>
      </v-btn>
      <v-btn icon  @click="clickGreen">
        <v-icon color="green">notifications</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <app-dialog-content></app-dialog-content>
    </v-dialog>
  </v-app>
</template>

<script>
  import appNavigationContent from './components/NavigationContent.vue'
  import appDialogContent from './components/DialogContent.vue'
  import web3 from 'web3'

  const abi = [{"constant":true,"inputs":[],"name":"getSurveyMemberList","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getSurveyResult","outputs":[{"name":"","type":"uint8[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSurveyCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"q_count","type":"uint8"},{"name":"q1","type":"uint8"},{"name":"q2","type":"uint8"},{"name":"q3","type":"uint8"},{"name":"q4","type":"uint8"},{"name":"q5","type":"uint8"}],"name":"setSurveyResult","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"}]

  export default {
    data (){
      return {
        dialog: false,
        drawer: null,
        accountAddr: '',
        contractAddr: '',
        balance: '',
        web3: null
      }
    },
    components: {
      appNavigationContent,
      appDialogContent
    },
    props: {
      source: String
    },
    methods: {
      clickYellow() {
        // log in function
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgnmmt / fail)
        this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

        // Now you can start your app & access web3 freely
        let $this = this
        this.web3.eth.getAccounts(function(e, r) {
          console.log(r[0]);
          $this.accountAddr = r[0]
          $this.updateBalance()
        });
      },
      clickRed() {
        // create contract
        if (this.accountAddr == '') {
          console.error("please login first!");
          return;
        }

        let $this = this;
        let simplesurveyContract = this.web3.eth.contract(abi);
        let simplesurvey = simplesurveyContract.new(
          {
            from: this.web3.eth.accounts[0], 
            data: '0x606060405233600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061064c806100546000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631a4914681461006757806336544ec9146100d15780639fe140b11461015f578063b7ab4f5b14610188575b600080fd5b341561007257600080fd5b61007a610202565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100bd5780820151818401526020810190506100a2565b505050509050019250505060405180910390f35b34156100dc57600080fd5b610108600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610296565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561014b578082015181840152602081019050610130565b505050509050019250505060405180910390f35b341561016a57600080fd5b610172610358565b6040518082815260200191505060405180910390f35b341561019357600080fd5b6101e8600480803560ff1690602001909190803560ff1690602001909190803560ff1690602001909190803560ff1690602001909190803560ff1690602001909190803560ff16906020019091905050610365565b604051808215151515815260200191505060405180910390f35b61020a61056d565b600180548060200260200160405190810160405280929190818152602001828054801561028c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610242575b5050505050905090565b61029e610581565b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561034c57602002820191906000526020600020906000905b82829054906101000a900460ff1660ff16815260200190600101906020826000010492830192600103820291508084116103155790505b50505050509050919050565b6000600180549050905090565b6000806000809150600091505b600180549050821015610403573373ffffffffffffffffffffffffffffffffffffffff166001838154811015156103a557fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156103f65760009250610561565b8180600101925050610372565b600180548060010182816104179190610595565b9160005260206000209001600033909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050600091505b8860ff1682101561055c5760009050600082141561048b578790506104cf565b600182141561049c578690506104ce565b60028214156104ad578590506104cd565b60038214156104be578490506104cc565b60048214156104cb578390505b5b5b5b5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480600101828161051f91906105c1565b916000526020600020906020918282040191900683909190916101000a81548160ff021916908360ff16021790555050818060010192505061046b565b600192505b50509695505050505050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b8154818355818115116105bc578183600052602060002091820191016105bb91906105fb565b5b505050565b8154818355818115116105f657601f016020900481601f016020900483600052602060002091820191016105f591906105fb565b5b505050565b61061d91905b80821115610619576000816000905550600101610601565b5090565b905600a165627a7a72305820c58a4e29a9aeb16c3d1ab6509595adde70d8917b8ad9dcfa3ac78e25b98993cd0029', 
            gas: '4700000',
            chainId: 5777
          }, function (e, contract){
            console.log(e, contract);
            if (typeof contract.address !== 'undefined') {
              console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
              alert('contract created!  ' + contract.address)
              $this.contractAddr = contract.address
            }
        })
      },
      clickBlue() {
        //send 1 ether to jaehyhun
        if (this.accountAddr == '') {
          console.error("please login first!");
          return;
        }

        let temp_value = 1;
        let jaehyunAccount = '0x4487f5bbFd35878879eB557F7E25C2632635eD5B';
        let tx = {
            value: this.web3.toWei(temp_value, "ether"),
            from: this.accountAddr,
            to: jaehyunAccount,
            chainId: 5777
        }

        let $this = this;
        this.web3.eth.sendTransaction(tx, function(e, r) {
          console.log(e, r)
          $this.updateBalance()
          alert('transaction complete!')
        })

        console.log("transaction processing!")
      },
      clickGreen() {
        // set survey result
        if (this.accountAddr == '') {
          console.error("please login first!");
          return;
        }
        if (this.contractAddr == '') {
          console.error("please make contract first!");
          return;
        }

        let question_count = 5
        let surveyResult = [1, 2, 3, 4, 5]
        console.log(question_count, surveyResult)

        let simpleSurveyContract = this.web3.eth.contract(abi)
        let simpleSurvey = simpleSurveyContract.at(this.contractAddr)

        console.log('account : ', this.web3.eth.accounts[0])
        console.log('contract : ', this.contractAddr)
        console.log(simpleSurvey)

        simpleSurvey.setSurveyResult(question_count,
                                     surveyResult[0],
                                     surveyResult[1],
                                     surveyResult[2],
                                     surveyResult[3],
                                     surveyResult[4],
                                     function(e, r) {
            console.log("setSurveyResult Finish!", e, r)
            alert('set survey result finish!')
        });
      },
      onCreate() {
        // alert('onCreate')
        console.log(web3)
      },
      updateBalance() {
        if (this.accountAddr == '') {
          console.error("please login first!");
        }

        let address = this.accountAddr
        let $this = this
        this.web3.eth.getBalance(address, function(e, r) {
            let balance = $this.web3.fromWei(r, 'ether')
            $this.balance = '(balance: ' + balance + ' ETH)'
        })
      }
    },
    created() {
      this.onCreate()
    }
  }
</script>