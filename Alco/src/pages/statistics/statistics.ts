import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  lineChart:any;

  constructor(public fb: FirebaseProvider, public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');
    const loading: Loading = this.loadingCtrl.create();
    loading.present();
    this.showChart(loading);
  }
  
  async showChart(loading: Loading){
    var promille = [];
    var beschrijving = [];

    this.fb.getMeasurements().then(meting => {

      meting.forEach(element => {
        promille.push(element.promille);
        beschrijving.push(element.beschrijving);
      });
      console.log(promille);
    }).then(() => {
      loading.dismiss();
      this.lineChart = new Chart(document.getElementById('lineChart'), {
  
        type: 'line',
        data: {
            labels:beschrijving,
            datasets: [
                {
                    label: "Alcohol promille",
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: promille,
                    spanGaps: false,
                }
            ]
        }
  
      });
    })
      
  }
}
