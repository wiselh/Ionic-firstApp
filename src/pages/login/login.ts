import { Component, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn() {
    console.log(this.username.value + ' ' + this.password.value);
    let alert = this.alertCtrl.create({
      title: 'Welcome successful!',
      subTitle: 'You are logged in',
      buttons: ['OK']
    });
    alert.present();
  }
}
